/* 模考题库：按官方题型自编，非真题原文 */
window.MOCK_QUESTIONS = [
  /* ---------------- Set A ---------------- */
  {
    id: "ma-fib1", type: "fib-rw", section: "reading", level: 1, time: 100,
    title: "城市树木", instruction: "每空选一个词。",
    content: "City trees do more than make streets look nice. They [[1]] air pollution and provide shade in summer. However, trees need water and space, and many cities [[2]] to plant enough of them. Experts argue that [[3]] planning is the key to a greener city.",
    blanks: [
      { options: ["reduce", "reduces", "reducing", "reduced"], answer: 0 },
      { options: ["struggle", "struggles", "struggling", "struggled"], answer: 0 },
      { options: ["careful", "carefully", "care", "caring"], answer: 0 }
    ],
    explanation: "① They 是复数，谓语用 reduce；② cities 是复数，用 struggle；③ 修饰 planning 需要形容词 careful。",
    tip: "先看主语单复数，再看空后词性。"
  },
  {
    id: "ma-ro1", type: "ro", section: "reading", level: 1, time: 130,
    title: "咖啡的传播", instruction: "按正确顺序点击句子。",
    sentences: [
      "As a result, coffee houses became meeting places for artists and businessmen.",
      "Coffee was first grown in Ethiopia and spread to the Middle East.",
      "By the 17th century, it had reached Europe.",
      "This new drink quickly became popular in cities such as London and Paris.",
      "Today, coffee is one of the most traded commodities in the world."
    ],
    answer: [1, 2, 3, 0, 4],
    explanation: "首句 B 交代起源，没有指代；C 接时间；D 的 This new drink 指咖啡；A 的 As a result 接在流行之后；E 的 Today 收尾。",
    tip: "先找首句，再抓 this / as a result / today 这些路标。"
  },
  {
    id: "ma-mcq1", type: "mcq-s", section: "reading", level: 1, time: 90,
    title: "公共交通", instruction: "选一个正确答案。",
    content: "Many cities are investing in public transport to reduce traffic. Buses and trains can carry far more people than cars, and they produce less pollution per passenger. However, systems are expensive to build and maintain, and some residents still prefer the convenience of driving.",
    question: "What is the main idea of the passage?",
    options: [
      "Public transport has benefits but also costs.",
      "Public transport is always cheaper than driving.",
      "Cars produce no pollution.",
      "All residents support public transport."
    ],
    answer: 0,
    explanation: "However 之后讲成本和习惯问题，所以是“有利有弊”。B/D 太绝对，C 与原文相反。",
    tip: "出现 However 的段落，主旨通常在转折后。"
  },
  {
    id: "ma-wfd1", type: "wfd", section: "listening", level: 1, time: 80,
    title: "听写 ×3（城市）", instruction: "每句只播一遍，整句听完再打。",
    audio: "The city council plans to build a new park near the river.||Residents are invited to share their opinions online.||The project will begin in September.",
    answers: [
      "The city council plans to build a new park near the river.",
      "Residents are invited to share their opinions online.",
      "The project will begin in September."
    ],
    explanation: "注意 council 拼写、are invited 被动、opinions 复数、September 大写。",
    tip: "一个正确单词 1 分；写半句也有分。"
  },
  {
    id: "ma-fibl1", type: "fib-l", section: "listening", level: 1, time: 80,
    title: "听写填空：城市树木", instruction: "听音频，补全 3 个空。",
    audio: "Trees in cities provide shade and lower temperatures. They also improve air quality, which improves public health. However, young trees need regular care during the first few years.",
    content: "Trees in cities [[1]] shade and lower temperatures. They also [[2]] air quality, which improves public health. However, young trees need [[3]] care during the first few years.",
    answers: [["provide"], ["improve"], ["regular"]],
    explanation: "三个空都是动词/形容词：provide（复数主语）、improve、regular（修饰 care）。",
    tip: "先判词性，再等那个词；拼写错 = 0 分。"
  },
  {
    id: "ma-hiw1", type: "hiw", section: "listening", level: 1, time: 60,
    title: "图书馆通知（点错词）", instruction: "听音频，点出与音频不一致的词。",
    audio: "The library will close early on Friday for staff training. Books can be returned to the box outside. Normal hours resume on Saturday.",
    content: "The library will closes early on Friday for staff training. Books can be returned to the box outside. Normal hours resume on Sunday.",
    wrong: [3, 22],
    explanation: "音频是 will close，文中是 will closes；音频是 Saturday，文中是 Sunday。",
    tip: "只点 100% 确定的，错点倒扣。"
  },

  /* ---------------- Set B ---------------- */
  {
    id: "mb-fib1", type: "fib-rw", section: "reading", level: 1, time: 100,
    title: "远程办公", instruction: "每空选一个词。",
    content: "Remote work has become common in many companies. Employees can [[1]] time by avoiding long commutes, and firms can save money on office space. [[2]], teamwork may suffer when people rarely meet. Many companies now [[3]] a hybrid model.",
    blanks: [
      { options: ["save", "saves", "saving", "saved"], answer: 0 },
      { options: ["Therefore", "However", "Moreover", "Although"], answer: 1 },
      { options: ["use", "uses", "using", "used"], answer: 0 }
    ],
    explanation: "① can 后接动词原形 save；② 前后是转折，用 However；③ companies 复数，用 use。",
    tip: "情态动词后一定是原形；逻辑词先判断转折还是因果。"
  },
  {
    id: "mb-ro1", type: "ro", section: "reading", level: 1, time: 130,
    title: "印刷术", instruction: "按正确顺序点击句子。",
    sentences: [
      "Before the printing press, books were copied by hand and very expensive.",
      "In the 15th century, Gutenberg developed a machine that could print pages quickly.",
      "As a result, books became cheaper and more widely available.",
      "This helped ideas spread across Europe more rapidly.",
      "Today, digital media has changed reading again."
    ],
    answer: [0, 1, 2, 3, 4],
    explanation: "时间线很清楚：手抄 → 印刷机 → 书变便宜 → 思想传播 → 今天。首句 A 没有指代。",
    tip: "有明显时间线的段落，按时间排最稳。"
  },
  {
    id: "mb-mcq1", type: "mcq-s", section: "reading", level: 1, time: 90,
    title: "运动与睡眠", instruction: "选一个正确答案。",
    content: "Regular exercise improves sleep quality. People who exercise during the day fall asleep faster and wake up less often. However, exercising late at night can have the opposite effect, because the body needs time to relax.",
    question: "What does the passage suggest?",
    options: [
      "Exercise at any time is equally good.",
      "Late-night exercise may make sleep worse.",
      "Sleep improves exercise performance.",
      "People should stop exercising."
    ],
    answer: 1,
    explanation: "However 之后说 late at night 可能相反，所以 B。A 与原文矛盾，C 无关，D 太绝对。",
    tip: "选项里出现 any / always / stop 这类绝对词，先怀疑。"
  },
  {
    id: "mb-wfd1", type: "wfd", section: "listening", level: 1, time: 80,
    title: "听写 ×3（校园）", instruction: "每句只播一遍。",
    audio: "Students should bring their student cards to the exam.||The results will be published next week.||Please check the notice board for updates.",
    answers: [
      "Students should bring their student cards to the exam.",
      "The results will be published next week.",
      "Please check the notice board for updates."
    ],
    explanation: "注意 students 复数、published 被动、notice board 两个词。",
    tip: "写完查单复数、时态、介词。"
  },
  {
    id: "mb-fibl1", type: "fib-l", section: "listening", level: 1, time: 80,
    title: "听写填空：咖啡", instruction: "听音频，补全 3 个空。",
    audio: "Coffee was first grown in Ethiopia. By the 17th century, it had become popular in Europe, where coffee houses served as meeting places. Today, the drink is consumed around the world.",
    content: "Coffee was first [[1]] in Ethiopia. By the 17th century, it had become popular in Europe, where coffee houses [[2]] as meeting places. Today, the drink is [[3]] around the world.",
    answers: [["grown"], ["served"], ["consumed"]],
    explanation: "was first grown（被动）、served as（固定搭配）、is consumed（被动）。",
    tip: "先听被动结构 was / is，再补过去分词。"
  },
  {
    id: "mb-hiw1", type: "hiw", section: "listening", level: 1, time: 60,
    title: "校园健身房（点错词）", instruction: "听音频，点出不一致的词。",
    audio: "The campus gym is open from six in the morning until ten at night. Students can use the pool for free. Classes must be booked online.",
    content: "The campus gym is open from seven in the morning until ten at night. Students can use the pool for free. Classes must be booked by phone.",
    wrong: [6, 26],
    explanation: "音频是 six，文中是 seven；音频是 online，文中是 by phone。",
    tip: "先扫文本，再听；只点确定的。"
  },

  /* ---------------- Set C ---------------- */
  {
    id: "mc-fib1", type: "fib-rw", section: "reading", level: 2, time: 100,
    title: "塑料回收", instruction: "每空选一个词。",
    content: "Plastic waste is a major environmental problem. Only a small [[1]] of plastic is recycled, and much of it ends up in the ocean. Governments are now [[2]] rules to reduce single-use plastic. However, [[3]] alternatives are often more expensive.",
    blanks: [
      { options: ["percentage", "number", "amount", "quantity"], answer: 0 },
      { options: ["introduce", "introduces", "introducing", "introduced"], answer: 2 },
      { options: ["green", "greener", "greening", "greenly"], answer: 1 }
    ],
    explanation: "① a small percentage of 是固定搭配；② are now 后接 doing，表示正在；③ 与单-use plastic 对比，用比较级 greener。",
    tip: "固定搭配和比较级是 FIB 的高频考点。"
  },
  {
    id: "mc-ro1", type: "ro", section: "reading", level: 2, time: 130,
    title: "互联网简史", instruction: "按正确顺序点击句子。",
    sentences: [
      "In the 1960s, researchers began to connect computers so they could share information.",
      "This network slowly grew into the internet we use today.",
      "At first, only universities and governments had access.",
      "In the 1990s, the web made it easy for ordinary people to go online.",
      "Today, billions of people use the internet every day."
    ],
    answer: [0, 2, 1, 3, 4],
    explanation: "A 交代起点；C 的 At first 接在早期之后；B 的 This network 指前面的网络；D 的 1990s 推进；E 的 Today 收尾。",
    tip: "At first / This network / Today 是三个最明显的路标。"
  },
  {
    id: "mc-mcq1", type: "mcq-m", section: "reading", level: 2, time: 100,
    title: "城市公园（多选）", instruction: "选 2 个正确选项。错选倒扣。",
    content: "City parks offer more than green space. They provide places for exercise, help reduce summer temperatures, and give children a safe place to play. However, parks are expensive to maintain, and some cities struggle to keep them clean.",
    question: "Which two statements are true according to the passage?",
    options: [
      "Parks help cool cities in summer.",
      "Parks are cheap to maintain.",
      "Parks give children a safe place to play.",
      "Cities never have problems with cleanliness."
    ],
    answer: [0, 2],
    explanation: "A 对应 help reduce summer temperatures；C 对应 a safe place to play。B 与 expensive 相反；D 与 struggle to keep them clean 相反。",
    tip: "每个选项都要找到原文依据，找不到就不选。"
  },
  {
    id: "mc-wfd1", type: "wfd", section: "listening", level: 2, time: 80,
    title: "听写 ×3（学术）", instruction: "每句只播一遍。",
    audio: "The lecture will discuss the effects of plastic on marine life.||Please write your answers in complete sentences.||The deadline for the assignment is Friday.",
    answers: [
      "The lecture will discuss the effects of plastic on marine life.",
      "Please write your answers in complete sentences.",
      "The deadline for the assignment is Friday."
    ],
    explanation: "effects 复数、marine 拼写、complete sentences 复数、assignment 拼写。",
    tip: "长词先记开头结尾，中间按音节补。"
  },
  {
    id: "mc-fibl1", type: "fib-l", section: "listening", level: 2, time: 80,
    title: "听写填空：塑料", instruction: "听音频，补全 3 个空。",
    audio: "Plastic waste is a serious environmental problem. Much of it ends up in the ocean, where it harms marine life. Some countries have introduced laws to reduce single-use plastic.",
    content: "Plastic waste is a serious [[1]] problem. Much of it ends up in the ocean, where it harms [[2]] life. Some countries have introduced [[3]] to reduce single-use plastic.",
    answers: [["environmental"], ["marine"], ["laws"]],
    explanation: "environmental（形容词）、marine life（海洋生物）、laws（可数复数）。",
    tip: "先看空前后：serious + 名词、marine + life、introduced + 名词。"
  },
  {
    id: "mc-hiw1", type: "hiw", section: "listening", level: 2, time: 60,
    title: "博物馆通知（点错词）", instruction: "听音频，点出不一致的词。",
    audio: "The museum is free for students on weekdays. Visitors should leave large bags at the desk. Photography is not allowed in the main hall.",
    content: "The museum is free for students on weekends. Visitors should leave large bags at the door. Photography is not allowed in the main hall.",
    wrong: [7, 15],
    explanation: "音频是 weekdays，文中是 weekends；音频是 desk，文中是 door。",
    tip: "数字、时间、地点词最容易被改，重点听。"
  },

  /* ---------------- Full mock: extra types ---------------- */
  {
    id: "fr-01", type: "fib-r", section: "reading", level: 1, time: 100,
    title: "城市蜜蜂（拖拽填空）", instruction: "从词库中选词填空，有两个干扰项。",
    content: "Bees are important for cities. They [[1]] flowers and help plants produce fruit. In recent years, beekeepers have [[2]] hives on rooftops. However, cities can be [[3]] for bees because there are fewer flowers. Experts suggest planting [[4]] gardens to support them.",
    bank: ["pollinate", "placed", "difficult", "community", "collect", "removed", "easy", "private"],
    blanks: [
      { answer: "pollinate" }, { answer: "placed" }, { answer: "difficult" }, { answer: "community" }
    ],
    explanation: "① They 后接动词原形 pollinate；② have + 过去分词 placed；③ be 后接形容词 difficult；④ community gardens 是固定搭配。",
    tip: "先把词库按词性分组：动词、形容词、名词，再逐空排除。"
  },
  {
    id: "fr-02", type: "fib-r", section: "reading", level: 2, time: 100,
    title: "线上博物馆（拖拽填空）", instruction: "从词库中选词填空。",
    content: "Museums are using the internet to reach more people. Many now [[1]] virtual tours of their collections. Visitors can [[2]] objects from different angles and read explanations. However, some curators worry that online visits may [[3]] the experience of seeing art in person. They argue that nothing can [[4]] the real thing.",
    bank: ["offer", "examine", "replace", "match", "refuse", "ignore", "improve", "create"],
    blanks: [{ answer: "offer" }, { answer: "examine" }, { answer: "replace" }, { answer: "match" }],
    explanation: "offer tours（提供）、examine objects（仔细观察）、replace the experience（取代）、match the real thing（比得上）。",
    tip: "先看搭配：offer / examine / replace / match 各有固定对象。"
  },
  {
    id: "fr-03", type: "fib-r", section: "reading", level: 2, time: 100,
    title: "食物浪费（拖拽填空）", instruction: "从词库中选词填空。",
    content: "Food waste is a growing problem. Supermarkets often [[1]] fruit that looks unusual, even if it is safe to eat. This waste [[2]] greenhouse gases when it rots. Some countries have [[3]] laws to encourage shops to donate food. Consumers can also help by planning meals and [[4]] less.",
    bank: ["reject", "produces", "introduced", "buying", "accept", "reduces", "removed", "selling"],
    blanks: [{ answer: "reject" }, { answer: "produces" }, { answer: "introduced" }, { answer: "buying" }],
    explanation: "reject fruit（拒收）、waste produces gases（单三）、have introduced（现在完成）、by planning and buying（并列动名词）。",
    tip: "空前后决定形式：have + 过去分词，by + doing。"
  },
  {
    id: "fr-04", type: "fib-r", section: "reading", level: 2, time: 100,
    title: "学习风格（拖拽填空）", instruction: "从词库中选词填空。",
    content: "Many people believe that students learn best in a particular [[1]], such as visual or auditory. However, research has not [[2]] strong evidence for this idea. Instead, experts argue that the [[3]] of teaching matters more than matching a style. Good teachers use a [[4]] of methods.",
    bank: ["style", "found", "quality", "range", "method", "ignored", "quantity", "limited"],
    blanks: [{ answer: "style" }, { answer: "found" }, { answer: "quality" }, { answer: "range" }],
    explanation: "a particular style（风格）、has not found（现在完成否定）、the quality of teaching（质量）、a range of（一系列）。",
    tip: "a range of / a quality of 都是高频搭配。"
  },
  {
    id: "lm-01", type: "mcq-l", section: "listening", level: 1, time: 90,
    title: "图书馆导览（多选）", instruction: "听录音，选 2 个正确选项。错选倒扣。",
    audio: "Welcome to the library induction. The ground floor has newspapers and new books. The first floor is for silent study, and group rooms can be booked online. Printing is available on the second floor. Please note that food is not allowed in the study areas.",
    question: "Which two statements are true?",
    options: [
      "Group rooms must be booked online.",
      "Food is allowed in the study areas.",
      "Printing is on the second floor.",
      "The first floor is for group discussion."
    ],
    answer: [0, 2], multi: true,
    explanation: "A 对应 group rooms can be booked online；C 对应 Printing is available on the second floor。B 与 food is not allowed 相反；D 与 silent study 相反。",
    tip: "先看选项关键词，再听对应句；只选有依据的。"
  },
  {
    id: "lm-02", type: "mcq-l", section: "listening", level: 2, time: 90,
    title: "步行与考试（多选）", instruction: "听录音，选 2 个正确选项。",
    audio: "Today we'll look at a study on walking. Researchers found that students who walked for twenty minutes before a test performed better than those who sat quietly. However, the effect was smaller for students who were already very fit. The researchers suggest that short walks may help concentration.",
    question: "Which two statements are true?",
    options: [
      "Walking before a test may improve performance.",
      "The effect was the same for everyone.",
      "Fit students benefited less.",
      "Walking has no effect on concentration."
    ],
    answer: [0, 2], multi: true,
    explanation: "A 对应 performed better；C 对应 the effect was smaller for students who were already very fit。B 与 smaller 矛盾；D 与 may help concentration 相反。",
    tip: "注意 however 后的转折，往往是第二个正确项。"
  },
  {
    id: "hc-01", type: "hcs", section: "listening", level: 1, time: 80,
    title: "电动公交（选摘要）", instruction: "听录音，选出最准确的摘要。",
    audio: "The city is planning to replace its old buses with electric ones. The new buses are quieter and produce less pollution, but they are more expensive. The city will start with ten buses and add more if the trial is successful.",
    options: [
      "The city is testing electric buses before buying more.",
      "The city has decided to buy only ten buses.",
      "Electric buses are cheaper than old buses.",
      "The old buses will be sold to another city."
    ],
    answer: 0,
    explanation: "原文说 start with ten and add more if the trial is successful，所以是“先试再买”。B 太绝对，C 与 more expensive 相反，D 未提及。",
    tip: "选“最全面但不极端”的摘要，排除原文没说的。"
  },
  {
    id: "hc-02", type: "hcs", section: "listening", level: 1, time: 80,
    title: "睡眠与记忆（选摘要）", instruction: "听录音，选出最准确的摘要。",
    audio: "Sleep is important for memory. During deep sleep, the brain organizes what you learned during the day. Students who sleep well before an exam remember more. However, sleeping too little or too much can both affect performance.",
    options: [
      "Sleep helps the brain organize new information.",
      "Sleeping more is always better.",
      "Memory is not affected by sleep.",
      "Students should study all night."
    ],
    answer: 0,
    explanation: "A 对应 the brain organizes what you learned；B 与 too much 也影响表现矛盾；C、D 与原文相反。",
    tip: "出现 always 的选项先怀疑。"
  },
  {
    id: "ls-01", type: "mcq-l", section: "listening", level: 1, time: 70,
    title: "健身房维修（单选）", instruction: "听录音，选一个正确答案。",
    audio: "The campus gym will close for repairs next Monday. It will reopen at the end of the month. Students can use the city pool for free during this period.",
    question: "What will happen next Monday?",
    options: [
      "The gym will close.",
      "The pool will close.",
      "The gym will reopen.",
      "Students will pay for the pool."
    ],
    answer: 0,
    explanation: "原文第一句：gym will close for repairs next Monday。B、C、D 都与原文不符。",
    tip: "听到时间点，立刻对应事件。"
  },
  {
    id: "ls-02", type: "mcq-l", section: "listening", level: 1, time: 70,
    title: "博物馆新展（单选）", instruction: "听录音，选一个正确答案。",
    audio: "The museum's new exhibition opens on Friday. Tickets are free for students, but they must be booked online. The exhibition runs until the end of August.",
    question: "How can students get tickets?",
    options: [
      "Book them online.",
      "Buy them at the door.",
      "Call the museum.",
      "Pay a small fee."
    ],
    answer: 0,
    explanation: "原文：free for students, but they must be booked online。B、C 未提及，D 与 free 相反。",
    tip: "but 后面常是考点。"
  },
  {
    id: "sm-01", type: "smw", section: "listening", level: 1, time: 50,
    title: "图书馆闭馆（选缺失词）", instruction: "听录音，最后一句缺一个词，选出最合适的。",
    audio: "The library will be closed on public",
    options: ["holidays", "mornings", "buildings", "numbers"],
    answer: 0,
    explanation: "public holidays 是固定搭配：公共假期闭馆。mornings 与 public 不搭；building / number 语义不通。",
    tip: "先听搭配，再听意思；public holidays 是高频短语。"
  },
  {
    id: "sm-02", type: "smw", section: "listening", level: 1, time: 50,
    title: "讲座时间（选缺失词）", instruction: "听录音，选出缺失的词。",
    audio: "The lecture will begin at nine o'clock in the",
    options: ["morning", "evening", "library", "building"],
    answer: 0,
    explanation: "in the morning 是固定搭配；nine o'clock in the morning 语义完整。",
    tip: "时间 + in the morning / afternoon / evening，是固定结构。"
  }
];

window.MOCKS = [
  {
    id: "F", name: "全真模考（完整版）", tag: "完整版", desc: "阅读 14 + 听力 17，按真实题量与节奏",
    sections: [
      { key: "reading", name: "阅读", time: 1740, qids: ["fib-rw-01", "fib-rw-02", "fib-rw-03", "ma-fib1", "mb-fib1", "fr-01", "fr-02", "fr-03", "fr-04", "ro-01", "ro-02", "ma-ro1", "mcq-m-01", "mcq-s-01"] },
      { key: "listening", name: "听力", time: 2100, qids: ["sst-01", "lm-01", "lm-02", "fib-l-01", "ma-fibl1", "hc-01", "hc-02", "ls-01", "ls-02", "sm-01", "sm-02", "hiw-01", "ma-hiw1", "wfd-01", "ma-wfd1", "mb-wfd1", "mc-wfd1"] }
    ]
  },
  {
    id: "A", name: "迷你模考 A", tag: "迷你", desc: "城市与校园话题，适合第一次模考",
    sections: [
      { key: "reading", name: "阅读", time: 900, qids: ["ma-fib1", "ma-ro1", "ma-mcq1", "fib-rw-02", "ro-02", "mcq-s-02"] },
      { key: "listening", name: "听力", time: 900, qids: ["ma-wfd1", "ma-fibl1", "ma-hiw1", "wfd-02", "fib-l-02", "hiw-02"] }
    ]
  },
  {
    id: "B", name: "迷你模考 B", tag: "迷你", desc: "工作与科技话题，阅读陷阱更多",
    sections: [
      { key: "reading", name: "阅读", time: 900, qids: ["mb-fib1", "mb-ro1", "mb-mcq1", "fib-rw-03", "ro-01", "mcq-m-01"] },
      { key: "listening", name: "听力", time: 900, qids: ["mb-wfd1", "mb-fibl1", "mb-hiw1", "wfd-01", "fib-l-01", "hiw-01"] }
    ]
  },
  {
    id: "C", name: "迷你模考 C", tag: "迷你", desc: "环境与历史话题，接近考试难度",
    sections: [
      { key: "reading", name: "阅读", time: 900, qids: ["mc-fib1", "mc-ro1", "mc-mcq1", "fib-rw-01", "mcq-m-02", "ro-01"] },
      { key: "listening", name: "听力", time: 900, qids: ["mc-wfd1", "mc-fibl1", "mc-hiw1", "wfd-03", "fib-l-01", "hiw-01"] }
    ]
  }
];
