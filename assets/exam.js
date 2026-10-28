/* PTE 52 Mock — standalone exam app */
(function () {
  "use strict";

  const PRACTICE = window.QUESTIONS || [];
  const MOCKQ = window.MOCK_QUESTIONS || [];
  const BY_ID = {};
  PRACTICE.concat(MOCKQ).forEach(q => { BY_ID[q.id] = q; });

  const TYPE = {
    "fib-rw": { name: "Reading: Fill in the Blanks", label: "阅读填空" },
    "fib-r": { name: "Reading: Fill in the Blanks (Drag)", label: "拖拽填空" },
    ro: { name: "Re-order Paragraphs", label: "排序" },
    "mcq-s": { name: "Multiple Choice (Single)", label: "单选" },
    "mcq-m": { name: "Multiple Choice (Multiple)", label: "多选" },
    sst: { name: "Summarize Spoken Text", label: "听力摘要" },
    "mcq-l": { name: "Listening: Multiple Choice", label: "听力选择" },
    "fib-l": { name: "Listening: Fill in the Blanks", label: "听力填空" },
    hcs: { name: "Highlight Correct Summary", label: "选摘要" },
    smw: { name: "Select Missing Word", label: "选缺失词" },
    hiw: { name: "Highlight Incorrect Words", label: "点错词" },
    wfd: { name: "Write from Dictation", label: "听写" }
  };

  const $ = sel => document.querySelector(sel);
  const app = $("#view");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const fmt = s => String(Math.max(0, Math.floor(s))).padStart(2, "0");
  function words(s) { return String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9'\s]/g, " ").split(/\s+/).filter(Boolean); }
  function normWord(w) { return String(w).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9']/g, ""); }
  function lcs(a, b) {
    const n = a.length, m = b.length;
    if (!n || !m) return 0;
    let prev = new Array(m + 1).fill(0), cur = new Array(m + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
      }
      const t = prev; prev = cur; cur = t; cur.fill(0);
    }
    return prev[m];
  }
  function lcsMatch(a, b) {
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
    const set = new Set();
    let i = n, j = m;
    while (i > 0 && j > 0) {
      if (a[i - 1] === b[j - 1]) { set.add(i - 1); i--; j--; }
      else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
    }
    return set;
  }
  function countWords(s) { return words(s).length; }

  /* ---------------- speech ---------------- */
  let voices = [];
  function loadVoices() { if ("speechSynthesis" in window) voices = window.speechSynthesis.getVoices() || []; }
  if ("speechSynthesis" in window) { loadVoices(); window.speechSynthesis.onvoiceschanged = loadVoices; }
  function pickVoice() { return voices.find(v => /en[-_]US/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang)) || null; }
  function speakText(text, btn) {
    if (!("speechSynthesis" in window)) { alert("请使用 Chrome 或 Edge 播放音频。"); return; }
    window.speechSynthesis.cancel();
    const parts = String(text).split("||").map(s => s.trim()).filter(Boolean);
    const box = btn ? btn.closest(".audio-box") : null;
    if (btn) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = "播放中…"; }
    if (box) box.querySelector(".wave")?.classList.add("playing");
    const done = () => {
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.old || "▶ 播放"; }
      if (box) box.querySelector(".wave")?.classList.remove("playing");
    };
    parts.forEach((p, i) => {
      const u = new SpeechSynthesisUtterance(p);
      u.lang = "en-US"; u.rate = 0.92;
      const v = pickVoice(); if (v) u.voice = v;
      if (i === parts.length - 1) { u.onend = done; u.onerror = done; }
      window.speechSynthesis.speak(u);
    });
  }

  /* ---------------- storage ---------------- */
  const MKEY = "pte52.mock.standalone.v1";
  function mockHistory() { try { return JSON.parse(localStorage.getItem(MKEY)) || []; } catch (e) { return []; } }
  function saveMock(rec) {
    const h = mockHistory(); h.unshift(rec);
    try { localStorage.setItem(MKEY, JSON.stringify(h.slice(0, 12))); } catch (e) {}
  }
  function lastMock() { return mockHistory()[0] || null; }
  function examById(id) { return (window.MOCKS || []).find(m => m.id === id) || null; }

  /* ---------------- exam state ---------------- */
  const EXAM = { set: null, si: 0, qi: 0, answers: {}, timer: null, remain: 0, results: null, last: null };

  function stopTimer() { if (EXAM.timer) { clearInterval(EXAM.timer); EXAM.timer = null; } }

  /* ---------------- router ---------------- */
  window.addEventListener("hashchange", route);
  function route() {
    stopTimer();
    const raw = location.hash.replace(/^#\/?/, "");
    const [page, arg] = raw.split("/");
    if (page === "exam" && arg && examById(arg)) startExam(arg);
    else if (page === "report") renderReport(EXAM.last || lastMock());
    else renderExamHome();
  }
  function go(hash) { location.hash = hash; }

  /* ---------------- landing ---------------- */
  function renderExamHome() {
    const mocks = window.MOCKS || [];
    const hist = mockHistory();
    const cards = mocks.map(m => {
      const qn = m.sections.reduce((n, x) => n + x.qids.length, 0);
      const mins = Math.round(m.sections.reduce((n, x) => n + x.time, 0) / 60);
      return '<div class="exam-card" data-ex="' + m.id + '">' +
        '<div class="exam-tag">' + esc(m.tag) + "</div>" +
        "<h3>" + esc(m.name) + "</h3>" +
        "<p>" + esc(m.desc) + "</p>" +
        '<div class="exam-meta"><span>' + qn + " 题</span><span>" + mins + " 分钟</span><span>阅读 + 听力</span></div>" +
        '<span class="exam-go">开始模考 →</span></div>';
    }).join("");

    const histHTML = hist.length ? hist.map((r, i) =>
      '<div class="mock-row"><div><b>' + esc(r.name) + "</b><span>" +
      new Date(r.date).toLocaleDateString("zh-CN") + "</span></div>" +
      '<div class="mock-score">阅读 ' + (r.reading ? r.reading.scaled : "—") +
      " · 听力 " + (r.listening ? r.listening.scaled : "—") +
      ' · 总分 ' + (r.overall || "—") + "</div>" +
      '<button class="btn btn-ghost" data-rep="' + i + '">看解析</button></div>').join("")
      : '<p class="note">还没有模考记录。完成一套后，这里会显示分数和解析入口。</p>';

    app.innerHTML = '<div class="container">' +
      '<section class="exam-hero"><div class="eyebrow">MOCK TEST</div>' +
      "<h1>全真模考：阅读 + 听力</h1>" +
      "<p>完整版按真实题量组卷：阅读 14 题 / 29 分钟，听力 17 题 / 35 分钟，不可回看；交卷后给估分和逐题解析。</p>" +
      '<div class="exam-hero-tags"><span>4 套题</span><span>31 题完整版</span><span>自动评分 + 解析</span></div></section>' +
      '<div class="section-title"><h2 id="choose">选择一套</h2><span>完整版考前 2 周做；迷你卷用于日常</span></div>' +
      '<div class="exam-grid">' + cards + "</div>" +
      '<div class="section-title"><h2>考试规则</h2></div>' +
      '<div class="exam-rules">' +
        '<div><b>1</b><p>每节独立计时，时间到自动交卷。</p></div>' +
        '<div><b>2</b><p>不可回看：点了“下一题”就不能改。</p></div>' +
        '<div><b>3</b><p>听力音频只放一遍，可以点播放。</p></div>' +
        '<div><b>4</b><p>交卷后给估分与逐题解析，不提供即时对错。</p></div>' +
      "</div>" +
      '<div class="section-title" id="history"><h2>历史记录</h2></div><div class="mock-history">' + histHTML + "</div>" +
      '<p class="note">估分公式：10 + 正确率 × 80，仅用于练习定位，不是官方 PTE 成绩。</p>' +
      "</div>";

    document.querySelectorAll("[data-ex]").forEach(el => el.onclick = () => go("#/exam/" + el.dataset.ex));
    document.querySelectorAll("[data-rep]").forEach(el => el.onclick = () => renderReport(hist[Number(el.dataset.rep)]));
  }

  /* ---------------- exam flow ---------------- */
  function startExam(id) {
    const set = examById(id);
    if (!set) { go("#/exam"); return; }
    EXAM.set = set; EXAM.si = 0; EXAM.qi = 0; EXAM.answers = {}; EXAM.results = null;
    stopTimer();
    renderExamIntro();
  }

  function renderExamIntro() {
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const mins = Math.round(sec.time / 60);
    app.innerHTML = '<div class="container"><div class="exam-intro">' +
      '<div class="eyebrow">' + esc(set.name) + "</div>" +
      "<h1>" + esc(sec.name) + "部分</h1>" +
      '<p class="exam-sub">' + sec.qids.length + " 题 · " + mins + " 分钟 · 不可回看</p>" +
      '<div class="exam-intro-list">' +
        "<p>· 计时开始后不暂停；时间到自动交卷。</p>" +
        "<p>· 每题只能提交一次，点了“下一题”不能返回。</p>" +
        "<p>· 听力题可以点播放，但建议只放一遍。</p>" +
        "<p>· 交卷前不显示对错。</p>" +
      "</div>" +
      '<button class="btn btn-primary" id="exStart">开始' + esc(sec.name) + " →</button>" +
      "</div></div>";
    $("#exStart").onclick = () => startExamSection();
  }

  function startExamSection() {
    const sec = EXAM.set.sections[EXAM.si];
    EXAM.qi = 0;
    EXAM.remain = sec.time;
    renderExamQuestion();
    stopTimer();
    EXAM.timer = setInterval(() => {
      EXAM.remain--;
      updateExamTimer();
      if (EXAM.remain <= 0) { stopTimer(); submitExamSection(true); }
    }, 1000);
  }

  function updateExamTimer() {
    const el = $("#exTimer");
    if (!el) return;
    el.textContent = fmt(EXAM.remain / 60) + ":" + fmt(EXAM.remain % 60);
    el.classList.toggle("warn", EXAM.remain <= 60);
  }

  function renderExamQuestion() {
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const q = BY_ID[sec.qids[EXAM.qi]];
    const n = sec.qids.length;
    app.innerHTML = '<div class="container"><div class="exam-wrap">' +
      '<div class="exam-top"><span class="pill">' + esc(set.name) + "</span>" +
        '<span class="exam-sec">' + esc(sec.name) + "</span>" +
        '<span class="exam-count">' + (EXAM.qi + 1) + " / " + n + "</span>" +
        '<div class="timer" id="exTimer">--:--</div></div>' +
      '<div class="exam-bar"><i style="width:' + Math.round(EXAM.qi / n * 100) + '%"></i></div>' +
      '<div class="q-card"><h1>' + esc(q.title) + "</h1>" +
        '<p class="q-instruction">' + esc(q.instruction) + "</p>" +
        '<div id="qbody">' + bodyHTML(q) + "</div></div>" +
      '<div class="actions exam-actions"><span class="note">提交后不能修改</span>' +
        '<div class="spacer"></div>' +
        '<button class="btn btn-primary" id="exNext">' + (EXAM.qi === n - 1 ? "提交本节" : "下一题 →") + "</button></div>" +
      "</div></div>";
    bind(q);
    updateExamTimer();
    $("#exNext").onclick = examNext;
  }

  function examNext() {
    const sec = EXAM.set.sections[EXAM.si];
    const q = BY_ID[sec.qids[EXAM.qi]];
    EXAM.answers[q.id] = getAnswer(q);
    if (EXAM.qi < sec.qids.length - 1) {
      EXAM.qi++;
      renderExamQuestion();
    } else {
      if (!confirm("提交本节？提交后不能修改。")) return;
      submitExamSection(false);
    }
  }

  function examSectionScore(key) {
    const list = (EXAM.results && EXAM.results[key]) || [];
    let s = 0, t = 0;
    list.forEach(r => {
      if (r.res.productive) return;
      s += r.res.score || 0;
      t += r.res.total || 0;
    });
    const pct = t ? s / t : 0;
    return { score: s, total: t, pct, scaled: t ? Math.round(10 + pct * 80) : 0 };
  }

  function submitExamSection() {
    stopTimer();
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const cur = BY_ID[sec.qids[EXAM.qi]];
    if (cur && EXAM.answers[cur.id] === undefined) EXAM.answers[cur.id] = getAnswer(cur);
    EXAM.results = EXAM.results || {};
    if (EXAM.results[sec.key]) return;
    EXAM.results[sec.key] = sec.qids.map(id => {
      const q = BY_ID[id];
      return { id, res: score(q, EXAM.answers[id]) };
    });
    if (EXAM.si < set.sections.length - 1) renderExamBreak();
    else finishExam();
  }

  function renderExamBreak() {
    const set = EXAM.set, sec = set.sections[EXAM.si];
    const next = set.sections[EXAM.si + 1];
    app.innerHTML = '<div class="container"><div class="exam-break">' +
      '<div class="eyebrow">SECTION COMPLETE</div>' +
      "<h1>" + esc(sec.name) + "部分完成</h1>" +
      "<p>已提交 " + sec.qids.length + " 题。成绩会在全部结束后统一显示。</p>" +
      '<div class="exam-break-next">下一节：' + esc(next.name) + " · " + Math.round(next.time / 60) + " 分钟</div>" +
      '<button class="btn btn-primary" id="exContinue">进入' + esc(next.name) + " →</button>" +
      "</div></div>";
    $("#exContinue").onclick = () => { EXAM.si++; renderExamIntro(); };
  }

  function finishExam() {
    const set = EXAM.set;
    const rec = {
      setId: set.id, name: set.name, date: new Date().toISOString(),
      reading: examSectionScore("reading"),
      listening: examSectionScore("listening"),
      answers: EXAM.answers,
      results: EXAM.results
    };
    rec.overall = Math.round(((rec.reading.scaled || 0) + (rec.listening.scaled || 0)) / 2);
    saveMock(rec);
    EXAM.last = rec;
    try { history.replaceState(null, "", "#/report"); } catch (e) {}
    renderReport(rec);
  }

  /* ---------------- question html ---------------- */
  function bodyHTML(q) {
    switch (q.type) {
      case "mcq-s":
      case "mcq-m": {
        const multi = q.type === "mcq-m";
        return (q.content ? '<div class="passage">' + esc(q.content) + "</div>" : "") +
          '<p class="question-line">' + esc(q.question) + "</p>" +
          '<div class="options" id="options">' + q.options.map((o, i) =>
            '<label class="opt" data-i="' + i + '"><input type="' + (multi ? "checkbox" : "radio") +
            '" name="opt" value="' + i + '"><span>' + esc(o) + "</span></label>").join("") + "</div>";
      }
      case "fib-rw": {
        const parts = q.content.split(/\[\[(\d+)\]\]/);
        let html = '<div class="passage">';
        parts.forEach((p, i) => {
          if (i % 2 === 1) {
            const bi = Number(p) - 1;
            html += '<select data-blank="' + bi + '" style="margin:0 4px"><option value="">选择</option>' +
              q.blanks[bi].options.map((o, oi) => '<option value="' + oi + '">' + esc(o) + "</option>").join("") + "</select>";
          } else html += esc(p);
        });
        return html + "</div>";
      }
      case "fib-r": {
        const parts = q.content.split(/\[\[(\d+)\]\]/);
        let html = '<div class="passage">';
        parts.forEach((p, i) => {
          if (i % 2 === 1) {
            const bi = Number(p) - 1;
            html += '<select data-fr="' + bi + '" style="margin:0 4px"><option value="">选择</option>' +
              q.bank.map(w => '<option>' + esc(w) + "</option>").join("") + "</select>";
          } else html += esc(p);
        });
        return html + "</div>" + '<p class="note">词库里有干扰项：先按词性排除，再看搭配。</p>';
      }
      case "ro": {
        return '<div class="order-box" id="orderBox"><div class="empty-hint">按顺序点击下面的句子</div></div>' +
          '<div class="order-area" id="orderArea">' + q.sentences.map((s, i) =>
            '<div class="sent" data-s="' + i + '"><span class="n">' + String.fromCharCode(65 + i) +
            "</span><span>" + esc(s) + "</span></div>").join("") + "</div>" +
          '<p class="note">按相邻对给分：连对 1 对得 1 分。</p>';
      }
      case "hiw": {
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放录音</button><span class="label">文本与音频不一致，点出被改掉的词</span></div>' +
          '<div class="words" id="words">' + q.content.split(/\s+/).map((w, i) =>
            '<span data-w="' + i + '">' + esc(w) + "</span>").join(" ") + "</div>" +
          '<p class="note">只点 100% 确定的；错点 −1。</p>';
      }
      case "wfd": {
        return q.audio.split("||").map((s, i) =>
          '<div class="blank-row" style="align-items:flex-start;margin-bottom:14px">' +
            '<span class="idx">' + (i + 1) + "</span>" +
            '<button class="btn btn-ghost" data-play="' + i + '" style="padding:8px 14px">▶</button>' +
            '<textarea data-wfd="' + i + '" style="min-height:64px" placeholder="听完这一句再打"></textarea>' +
          "</div>").join("") +
          '<p class="note">每个正确单词 1 分；拼写错误算错。</p>';
      }
      case "sst": {
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放讲座</button><span class="label">10 分钟，50–70 词</span></div>' +
          '<textarea id="sstText" class="tall" placeholder="The lecture discusses … First … In conclusion …"></textarea>' +
          '<div class="wordcount" id="wc"></div>';
      }
      case "fib-l": {
        const parts = q.content.split(/\[\[(\d+)\]\]/);
        let html = '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>▶ 播放录音</button><span class="label">音频只放一遍</span></div><div class="passage">';
        parts.forEach((p, i) => {
          if (i % 2 === 1) html += '<input type="text" data-lblank="' + (Number(p) - 1) + '" style="width:150px;margin:0 4px" autocomplete="off">';
          else html += esc(p);
        });
        return html + "</div>";
      }
      case "mcq-l":
      case "hcs":
      case "smw": {
        const multi = !!q.multi;
        const label = q.type === "hcs" ? "▶ 播放讲座" : q.type === "smw" ? "▶ 播放（最后一句缺失）" : "▶ 播放录音";
        return '<div class="audio-box"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
          '<button class="btn btn-primary" data-play>' + label + "</button>" +
          '<span class="label">音频只放一遍</span></div>' +
          (q.question ? '<p class="question-line">' + esc(q.question) + "</p>" : "") +
          '<div class="options" id="options">' + q.options.map((o, i) =>
            '<label class="opt" data-i="' + i + '"><input type="' + (multi ? "checkbox" : "radio") +
            '" name="opt" value="' + i + '"><span>' + esc(o) + "</span></label>").join("") + "</div>";
      }
      default: return "";
    }
  }

  function bind(q) {
    document.querySelectorAll("[data-play]").forEach(btn => {
      btn.onclick = () => {
        let text = q.audio;
        const idx = btn.dataset.play;
        if (idx !== undefined && idx !== "" && q.type === "wfd") text = q.audio.split("||")[Number(idx)];
        speakText(text, btn);
      };
    });
    if (q.type === "ro") {
      const box = $("#orderBox"), area = $("#orderArea");
      let order = [];
      const render = () => {
        if (!order.length) box.innerHTML = '<div class="empty-hint">按顺序点击下面的句子</div>';
        else box.innerHTML = order.map(i => '<div class="sent" data-o="' + i + '"><span class="n">' +
          (order.indexOf(i) + 1) + '</span><span>' + esc(q.sentences[i]) + "</span></div>").join("");
        area.querySelectorAll(".sent").forEach(el => el.classList.toggle("used", order.includes(Number(el.dataset.s))));
        box.querySelectorAll("[data-o]").forEach(el => el.onclick = () => {
          order = order.filter(x => x !== Number(el.dataset.o)); render();
        });
      };
      area.querySelectorAll(".sent").forEach(el => el.onclick = () => {
        if (!order.includes(Number(el.dataset.s))) { order.push(Number(el.dataset.s)); render(); }
      });
    }
    if (q.type === "hiw") {
      document.querySelectorAll("#words span").forEach(el => el.onclick = () => el.classList.toggle("picked"));
    }
    if (q.type === "sst") {
      const ta = $("#sstText"), wc = $("#wc");
      const upd = () => { wc.innerHTML = "字数 <b>" + countWords(ta.value) + "</b> · 目标 <b>50–70</b>"; };
      ta.addEventListener("input", upd); upd();
    }
  }

  function getAnswer(q) {
    switch (q.type) {
      case "mcq-s": {
        const el = document.querySelector('input[name="opt"]:checked');
        return el ? Number(el.value) : null;
      }
      case "mcq-m":
        return Array.from(document.querySelectorAll('input[name="opt"]:checked')).map(el => Number(el.value));
      case "fib-rw":
        return q.blanks.map((_, i) => {
          const el = document.querySelector('[data-blank="' + i + '"]');
          return el && el.value !== "" ? Number(el.value) : null;
        });
      case "fib-r":
        return q.blanks.map((_, i) => {
          const el = document.querySelector('[data-fr="' + i + '"]');
          return el && el.value ? el.value : null;
        });
      case "ro":
        return Array.from(document.querySelectorAll("#orderBox [data-o]")).map(el => Number(el.dataset.o));
      case "hiw":
        return Array.from(document.querySelectorAll("#words span.picked")).map(el => Number(el.dataset.w));
      case "wfd":
        return q.answers.map((_, i) => {
          const el = document.querySelector('[data-wfd="' + i + '"]');
          return el ? el.value : "";
        });
      case "sst": return $("#sstText") ? $("#sstText").value : "";
      case "fib-l":
        return q.answers.map((_, i) => {
          const el = document.querySelector('[data-lblank="' + i + '"]');
          return el ? el.value : "";
        });
      case "mcq-l":
        if (q.multi) return Array.from(document.querySelectorAll('input[name="opt"]:checked')).map(el => Number(el.value));
        {
          const el = document.querySelector('input[name="opt"]:checked');
          return el ? Number(el.value) : null;
        }
      case "hcs":
      case "smw": {
        const el = document.querySelector('input[name="opt"]:checked');
        return el ? Number(el.value) : null;
      }
      default: return null;
    }
  }

  function score(q, a) {
    switch (q.type) {
      case "mcq-s":
        return { score: a === q.answer ? 1 : 0, total: 1, correct: a === q.answer };
      case "mcq-m": {
        const arr = a || [];
        let s = 0;
        arr.forEach(i => { s += q.answer.includes(i) ? 1 : -1; });
        s = Math.max(0, s);
        const correct = q.answer.length === arr.length && q.answer.every(i => arr.includes(i));
        return { score: s, total: q.answer.length, correct };
      }
      case "fib-rw": {
        const arr = a || [];
        let s = 0;
        q.blanks.forEach((b, i) => { if (arr[i] === b.answer) s++; });
        return { score: s, total: q.blanks.length, correct: s === q.blanks.length };
      }
      case "fib-r": {
        const arr = a || [];
        let s = 0;
        q.blanks.forEach((b, i) => {
          if (words(b.answer).join(" ") === words(arr[i] || "").join(" ")) s++;
        });
        return { score: s, total: q.blanks.length, correct: s === q.blanks.length };
      }
      case "fib-l": {
        const arr = a || [];
        let s = 0;
        q.answers.forEach((acc, i) => {
          if (acc.some(x => words(x).join(" ") === words(arr[i] || "").join(" "))) s++;
        });
        return { score: s, total: q.answers.length, correct: s === q.answers.length };
      }
      case "ro": {
        const order = a || [];
        let pair = 0;
        for (let i = 0; i < q.answer.length - 1; i++) {
          const x = q.answer[i], y = q.answer[i + 1];
          for (let j = 0; j < order.length - 1; j++) {
            if (order[j] === x && order[j + 1] === y) { pair++; break; }
          }
        }
        return { score: pair, total: q.answer.length - 1, correct: pair === q.answer.length - 1 && order.length === q.answer.length };
      }
      case "hiw": {
        const wrong = new Set(q.wrong);
        const arr = a || [];
        let s = 0;
        arr.forEach(i => { s += wrong.has(i) ? 1 : -1; });
        s = Math.max(0, s);
        const correct = arr.length === q.wrong.length && q.wrong.every(i => arr.includes(i));
        return { score: s, total: q.wrong.length, correct };
      }
      case "wfd": {
        const arr = a || [];
        let s = 0, t = 0;
        q.answers.forEach((ans, i) => {
          const aw = words(ans), sw = words(arr[i] || "");
          t += aw.length;
          s += lcs(aw, sw);
        });
        return { score: s, total: t, correct: s === t };
      }
      case "mcq-l": {
        if (!q.multi) return { score: a === q.answer ? 1 : 0, total: 1, correct: a === q.answer };
        const arr = a || [];
        let s = 0;
        arr.forEach(i => { s += q.answer.includes(i) ? 1 : -1; });
        s = Math.max(0, s);
        const right = q.answer.length === arr.length && q.answer.every(i => arr.includes(i));
        return { score: s, total: q.answer.length, correct: right };
      }
      case "hcs":
      case "smw":
        return { score: a === q.answer ? 1 : 0, total: 1, correct: a === q.answer };
      default:
        return { productive: true, done: true };
    }
  }

  function answerSummary(q) {
    switch (q.type) {
      case "mcq-s": return String.fromCharCode(65 + q.answer);
      case "mcq-m": return q.answer.map(i => String.fromCharCode(65 + i)).join("、");
      case "fib-rw": return q.blanks.map(b => b.options[b.answer]).join(" / ");
      case "fib-r": return q.blanks.map(b => b.answer).join(" / ");
      case "fib-l": return q.answers.map(a => a[0]).join(" / ");
      case "ro": return q.answer.map(i => String.fromCharCode(65 + i)).join(" → ");
      case "hiw": { const all = q.content.split(/\s+/); return q.wrong.map(i => all[i]).join("、"); }
      case "wfd": return q.answers.join(" / ");
      case "mcq-l": return q.multi ? q.answer.map(i => String.fromCharCode(65 + i)).join("、") : String.fromCharCode(65 + q.answer);
      case "hcs":
      case "smw": return String.fromCharCode(65 + q.answer);
      default: return "";
    }
  }

  function userSummary(q, a) {
    if (a == null || a === "" || (Array.isArray(a) && (!a.length || a.every(x => x == null || x === "")))) return "（未作答）";
    switch (q.type) {
      case "mcq-s": return String.fromCharCode(65 + a);
      case "mcq-m": return a.map(i => String.fromCharCode(65 + i)).join("、");
      case "fib-rw": return a.map((v, i) => v == null ? "—" : q.blanks[i].options[v]).join(" / ");
      case "fib-r": return a.map(x => x || "—").join(" / ");
      case "fib-l": return a.join(" / ");
      case "ro": return a.map(i => String.fromCharCode(65 + i)).join(" → ");
      case "hiw": { const all = q.content.split(/\s+/); return a.map(i => all[i]).join("、"); }
      case "wfd": return a.map((x, i) => "第" + (i + 1) + "句：" + (x || "—")).join("；");
      case "mcq-l": return q.multi ? (a || []).map(i => String.fromCharCode(65 + i)).join("、") : String.fromCharCode(65 + a);
      case "hcs":
      case "smw": return String.fromCharCode(65 + a);
      default: return String(a);
    }
  }

  /* ---------------- report ---------------- */
  function renderReport(rec) {
    if (!rec) { renderExamHome(); return; }
    const set = rec.setId ? examById(rec.setId) : null;
    const sections = set ? set.sections : [];
    const rows = [];

    sections.forEach(sec => {
      const list = (rec.results && rec.results[sec.key]) || [];
      const prodN = list.filter(r => r.res.productive).length;
      rows.push('<div class="rv-sec">' + esc(sec.name) + " · " + list.length + " 题" +
        (prodN ? "（含 " + prodN + " 题自评）" : "") + "</div>");
      list.forEach(r => {
        const q = BY_ID[r.id];
        if (!q) return;
        const prod = !!r.res.productive;
        const ok = !prod && r.res.correct;
        let bodyHtml = "";
        if (prod) {
          bodyHtml = '<div class="rv-exp"><b>参考</b><p>' + esc(q.model || "") + "</p></div>" +
            '<div class="rv-tip">52 分提示：' + esc(q.tip || "") + "</div>";
        } else {
          bodyHtml = '<div class="rv-line"><b>你的答案</b><span>' +
            esc(userSummary(q, rec.answers ? rec.answers[q.id] : null)) + "</span></div>" +
            '<div class="rv-line"><b>正确答案</b><span>' + esc(answerSummary(q)) + "</span></div>" +
            '<div class="rv-exp"><b>解析</b><p>' + esc(q.explanation) + "</p></div>" +
            '<div class="rv-tip">52 分提示：' + esc(q.tip || "") + "</div>";
        }
        rows.push('<div class="review-item ' + (prod ? "neutral" : ok ? "ok" : "no") + '">' +
          '<button class="review-head">' +
            '<span class="rv-type">' + TYPE[q.type].name + "</span>" +
            '<span class="rv-title">' + esc(q.title) + "</span>" +
            '<span class="rv-score">' + (prod ? "自评" : (r.res.score || 0) + " / " + (r.res.total || 0)) + "</span>" +
            '<span class="rv-mark">' + (prod ? "—" : ok ? "✓" : "✗") + "</span>" +
          "</button>" +
          '<div class="review-body" hidden>' + bodyHtml + "</div></div>");
      });
    });

    app.innerHTML = '<div class="container"><div class="report">' +
      '<div class="eyebrow">MOCK REPORT</div>' +
      "<h1>" + esc(rec.name || "模考报告") + "</h1>" +
      '<p class="report-date">' + new Date(rec.date).toLocaleString("zh-CN") + "</p>" +
      '<div class="report-hero"><div class="report-big">' + (rec.overall || "—") + '<small>/ 90</small></div>' +
        '<div class="report-skills">' +
          '<div><span>阅读 R</span><b>' + (rec.reading ? rec.reading.scaled : "—") + "</b><small>" +
            (rec.reading ? Math.round(rec.reading.pct * 100) + "%" : "") + "</small></div>" +
          '<div><span>听力 L</span><b>' + (rec.listening ? rec.listening.scaled : "—") + "</b><small>" +
            (rec.listening ? Math.round(rec.listening.pct * 100) + "%" : "") + "</small></div>" +
        "</div></div>" +
      '<p class="note">估分 = 10 + 正确率 × 80，只反映本次阅读/听力的练习水平，不是官方成绩。</p>' +
      '<div class="section-title"><h2>逐题解析</h2><span>点开看你的答案、正确答案和原因</span></div>' +
      '<div class="review-list">' + rows.join("") + "</div>" +
      '<div class="actions" style="justify-content:center;margin-top:28px">' +
        (rec.setId ? '<a class="btn btn-primary" href="#/exam/' + rec.setId + '">再考一次</a>' : "") +
        '<a class="btn btn-ghost" href="#/exam">返回模考</a>' +
      "</div></div></div>";

    document.querySelectorAll(".review-head").forEach(head => {
      head.onclick = () => {
        const body = head.nextElementSibling;
        if (body) body.hidden = !body.hidden;
      };
    });
  }

  /* ---------------- boot ---------------- */
  window.addEventListener("DOMContentLoaded", () => {
    if (!location.hash) location.hash = "#/exam";
    route();
  });
  if (document.readyState !== "loading") {
    if (!location.hash) location.hash = "#/exam";
    route();
  }
})();
