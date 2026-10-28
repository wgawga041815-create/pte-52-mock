/* 仅保留模考引用到的练习题，独立站不提供题库页面 */
window.QUESTIONS = [
  {
    "id": "fib-rw-01",
    "type": "fib-rw",
    "section": "reading",
    "level": 1,
    "time": 120,
    "title": "创造力可以学吗",
    "instruction": "每空选一个词。先判词性，再看搭配和逻辑。",
    "content": "Many people believe that creativity is a gift that only a few people possess. In fact, research [[1]] that creativity can be learned. Psychologists argue that [[2]] environments, where mistakes are accepted, are more likely to produce new ideas. [[3]], companies that encourage experimentation tend to be more innovative.",
    "blanks": [
      {
        "options": [
          "suggests",
          "suggest",
          "suggestion",
          "suggesting"
        ],
        "answer": 0
      },
      {
        "options": [
          "support",
          "supportive",
          "supporting",
          "supported"
        ],
        "answer": 1
      },
      {
        "options": [
          "However",
          "Therefore",
          "Although",
          "Despite"
        ],
        "answer": 1
      }
    ],
    "explanation": "① research 是不可数名词，谓语用单三 suggests；② 空后是名词 environments，需要形容词 supportive；③ 前句说“支持试错”，后句说“鼓励实验的公司更创新”，是因果，用 Therefore。",
    "tip": "先判词性，四个选项里通常能排除两个；再看逻辑，最后才看意思。"
  },
  {
    "id": "fib-rw-02",
    "type": "fib-rw",
    "section": "reading",
    "level": 1,
    "time": 120,
    "title": "睡眠与学习",
    "instruction": "每空选一个词。注意词性和固定搭配。",
    "content": "Sleep plays an important [[1]] in learning. During deep sleep, the brain [[2]] information into long-term memory. Students who sleep well tend to [[3]] better in exams.",
    "blanks": [
      {
        "options": [
          "role",
          "rule",
          "place",
          "rate"
        ],
        "answer": 0
      },
      {
        "options": [
          "moves",
          "moving",
          "movement",
          "moved"
        ],
        "answer": 0
      },
      {
        "options": [
          "perform",
          "performance",
          "performing",
          "performed"
        ],
        "answer": 0
      }
    ],
    "explanation": "① play an important role in 是固定搭配；② the brain 是单数主语，谓语用 moves；③ tend to 后接动词原形 perform。",
    "tip": "固定搭配是 FIB 最快的得分点，平时按短语记，不要按单词记。"
  },
  {
    "id": "fib-rw-03",
    "type": "fib-rw",
    "section": "reading",
    "level": 2,
    "time": 120,
    "title": "城市绿地",
    "instruction": "每空选一个词。注意转折与因果。",
    "content": "Green spaces are important for cities. They [[1]] air quality and give residents a place to relax. [[2]], land is expensive, so some cities build parks on rooftops. These spaces are smaller, [[3]] they still improve life in dense areas.",
    "blanks": [
      {
        "options": [
          "improve",
          "improves",
          "improving",
          "improved"
        ],
        "answer": 0
      },
      {
        "options": [
          "However",
          "Therefore",
          "Moreover",
          "For example"
        ],
        "answer": 0
      },
      {
        "options": [
          "but",
          "because",
          "so",
          "unless"
        ],
        "answer": 0
      }
    ],
    "explanation": "① They 是复数，谓语用 improve；② 前句说绿地重要，后句说地贵，是转折，用 However；③ smaller 与 improve 是让步转折，用 but。",
    "tip": "逻辑词先判断关系：转折 however/but，因果 therefore/because，并列 moreover。"
  },
  {
    "id": "ro-01",
    "type": "ro",
    "section": "reading",
    "level": 1,
    "time": 150,
    "title": "公共图书馆的历史",
    "instruction": "按正确顺序点击句子。按相邻对给分，先连确定的。",
    "sentences": [
      "As a result, literacy rates began to rise.",
      "The first public libraries appeared in the 19th century.",
      "Today, libraries also offer digital services.",
      "This idea spread quickly across Europe and North America.",
      "They were funded by local taxpayers and open to everyone."
    ],
    "answer": [
      1,
      4,
      3,
      0,
      2
    ],
    "explanation": "首句 B 交代背景，没有指代；E 的 They 指 libraries；D 的 This idea 指“公共图书馆”这件事；A 的 As a result 接在传播之后；C 的 Today 是时间收尾。",
    "tip": "先找“没有 this / these / they”的首句，再顺着指代链往下排。"
  },
  {
    "id": "ro-02",
    "type": "ro",
    "section": "reading",
    "level": 1,
    "time": 150,
    "title": "城市热岛",
    "instruction": "按正确顺序点击句子。注意 This 指代什么。",
    "sentences": [
      "As a result, the city centre can be several degrees warmer than the countryside.",
      "Concrete and asphalt absorb heat during the day.",
      "At night, they release the heat slowly.",
      "This is known as the urban heat island effect.",
      "Planting trees can help reduce it."
    ],
    "answer": [
      1,
      2,
      0,
      3,
      4
    ],
    "explanation": "B 先讲白天吸热，C 的 they 指 concrete and asphalt；A 的 As a result 接结果；D 的 This 指前面整件事；E 的 it 指热岛效应。",
    "tip": "每连对一对就有 1 分，不需要全排对；先连最有把握的两对。"
  },
  {
    "id": "mcq-s-01",
    "type": "mcq-s",
    "section": "reading",
    "level": 1,
    "time": 100,
    "title": "远程办公的影响",
    "instruction": "读短文，选一个正确答案。",
    "content": "Remote work has changed how companies hire. Employers can now recruit from a wider pool of candidates, and staff save time on commuting. However, remote employees often report feeling isolated, and some managers find it harder to build team spirit.",
    "question": "What is the main idea of the passage?",
    "options": [
      "Remote work has both benefits and drawbacks.",
      "Remote work is always better for companies.",
      "Employees no longer need to commute.",
      "Managers prefer remote work."
    ],
    "answer": 0,
    "explanation": "文中有 However 转折：前面讲好处（招聘范围、通勤），后面讲问题（孤立、团队精神），所以是“有利有弊”。B、D 与原文矛盾，C 只是细节。",
    "tip": "出现 However 的段落，主旨通常在转折后；选项太绝对的（always）先排除。"
  },
  {
    "id": "mcq-s-02",
    "type": "mcq-s",
    "section": "reading",
    "level": 1,
    "time": 100,
    "title": "为什么睡眠有助学习",
    "instruction": "读短文，选一个正确答案。",
    "content": "During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep for seven to eight hours before an exam remember more than those who stay up late.",
    "question": "According to the passage, why is sleep important for learning?",
    "options": [
      "It helps the brain store information in long-term memory.",
      "It reduces the amount of time needed to study.",
      "It makes students feel less stressed.",
      "It replaces the need for revision."
    ],
    "answer": 0,
    "explanation": "原文直接说 moves it into long-term memory。B、C、D 都是常见常识，但文中没有依据——PTE 阅读只按原文选。",
    "tip": "不要用常识答题；每个选项都要能在原文找到对应句。"
  },
  {
    "id": "mcq-m-01",
    "type": "mcq-m",
    "section": "reading",
    "level": 2,
    "time": 110,
    "title": "远程办公（多选）",
    "instruction": "选 2 个正确选项。注意：错选倒扣 1 分，只选有依据的。",
    "content": "Remote work has changed how companies hire. Employers can now recruit from a wider pool of candidates, and staff save time on commuting. However, remote employees often report feeling isolated, and some managers find it harder to build team spirit.",
    "question": "Which two statements are true according to the passage?",
    "options": [
      "Companies can hire from more places.",
      "Remote workers spend more time commuting.",
      "Some staff feel lonely when working remotely.",
      "Managers find it easier to build teams."
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "A 对应 a wider pool of candidates；C 对应 feeling isolated。B 与 save time on commuting 相反；D 与 harder to build team spirit 相反。",
    "tip": "多选是阅读里唯一倒扣的题：写不出“原文哪一句支持”，就不要选。"
  },
  {
    "id": "mcq-m-02",
    "type": "mcq-m",
    "section": "reading",
    "level": 2,
    "time": 110,
    "title": "图书馆的变化（多选）",
    "instruction": "选 2 个正确选项。错选倒扣。",
    "content": "Public libraries have changed a lot in the last twenty years. They still lend books, but they also offer free internet access, quiet study spaces and workshops on digital skills. As a result, visits have increased in many cities, even though fewer people borrow printed books.",
    "question": "Which two statements are true according to the passage?",
    "options": [
      "Libraries now offer more than books.",
      "Fewer people visit libraries than before.",
      "Some libraries run digital skills workshops.",
      "Printed books are no longer available."
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "A 概括 internet / study spaces / workshops；C 对应 workshops on digital skills。B 与 visits have increased 相反；D 与 still lend books 相反。",
    "tip": "先读题干，再回文定位；每个选项找一个对应句。"
  },
  {
    "id": "wfd-01",
    "type": "wfd",
    "section": "listening",
    "level": 1,
    "time": 90,
    "title": "听写 ×3（校园）",
    "instruction": "点播放，每句只播一遍。整句听完再打字，写完检查单复数。",
    "audio": "The tutorial will be held in the main library on Thursday.||Students should check the website for updated information.||Please submit your application before the end of March.",
    "answers": [
      "The tutorial will be held in the main library on Thursday.",
      "Students should check the website for updated information.",
      "Please submit your application before the end of March."
    ],
    "explanation": "WFD 每个正确单词 1 分（拼写错误算错）。常见失分：tutorial 拼写、will be held 被动、Thursday 的拼写、information 不可数。",
    "tip": "写半句也有分；不会的词用拼音占位，先把句子结构打出来。"
  },
  {
    "id": "wfd-02",
    "type": "wfd",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "听写 ×3（学术）",
    "instruction": "整句听完再打，检查时态和介词。",
    "audio": "The research project requires a large amount of data.||Climate change affects the availability of fresh water.||The lecture will discuss the causes of urban growth.",
    "answers": [
      "The research project requires a large amount of data.",
      "Climate change affects the availability of fresh water.",
      "The lecture will discuss the causes of urban growth."
    ],
    "explanation": "注意：amount of 而不是 number of（data 不可数）；affects 单三；availability 拼写。",
    "tip": "WFD 是听力和写作双供分，是整场考试性价比最高的题。"
  },
  {
    "id": "wfd-03",
    "type": "wfd",
    "section": "listening",
    "level": 1,
    "time": 90,
    "title": "听写 ×3（校园通知）",
    "instruction": "先听完整句，再打字。",
    "audio": "The campus bus runs every fifteen minutes.||Please turn off your phone during the exam.||The student centre is open until nine o'clock.",
    "answers": [
      "The campus bus runs every fifteen minutes.",
      "Please turn off your phone during the exam.",
      "The student centre is open until nine o'clock."
    ],
    "explanation": "fifteen 与 fifty 易混；turn off 是分开的短语；nine o'clock 的撇号不影响单词计分，但拼写要完整。",
    "tip": "数字和时间为单位，听到就写数字，别写单词，省时间。"
  },
  {
    "id": "sst-01",
    "type": "sst",
    "section": "listening",
    "level": 1,
    "time": 600,
    "title": "睡眠与学习（讲座）",
    "instruction": "听讲座，10 分钟内写 50–70 词摘要。",
    "audio": "Today I want to talk about sleep and learning. Research shows that sleep is not just rest. During deep sleep, the brain replays what you learned during the day and moves it into long-term memory. Students who sleep seven to eight hours before an exam remember more than those who stay up late. So if you want to learn efficiently, the most effective revision plan may include a good night's sleep.",
    "model": "The lecture discusses the link between sleep and learning. First, the speaker explains that deep sleep helps the brain move information into long-term memory. In conclusion, students who sleep seven to eight hours remember more, so a good night's sleep is part of effective revision.",
    "checklist": [
      "字数 50–70",
      "包含主题 + 两个细节",
      "没有整句照抄"
    ],
    "explanation": "SST 评分：内容 2、形式 2（50–70 词，少于 40 或多于 100 直接 0）、语法/词汇/拼写各 2。",
    "tip": "模板：The lecture discusses … First … In conclusion …，只填关键词。"
  },
  {
    "id": "hiw-01",
    "type": "hiw",
    "section": "listening",
    "level": 1,
    "time": 70,
    "title": "博物馆通知（点错词）",
    "instruction": "点播放听音频，然后点出文中与音频不一致的词。错点倒扣。",
    "audio": "The museum is open every day except Monday. Visitors can buy tickets online or at the entrance. Guided tours start at ten in the morning.",
    "content": "The museum is opens every day except Monday. Visitors can buy tickets online and at the entrance. Guided tours start at ten in the morning.",
    "wrong": [
      3,
      13
    ],
    "explanation": "音频是 is open，文中是 is opens；音频是 or，文中是 and。只点这两处，其他词不要动。",
    "tip": "HIW 只点 100% 确定的；不确定的点下去，对了 +1，错了 −1。"
  },
  {
    "id": "hiw-02",
    "type": "hiw",
    "section": "listening",
    "level": 1,
    "time": 70,
    "title": "图书馆工作坊（点错词）",
    "instruction": "听音频，点出被改掉的词。",
    "audio": "The library offers free workshops on academic writing. Students can book a place online or ask at the front desk. The workshops run every Tuesday afternoon.",
    "content": "The library offers free workshops on academic writing. Students can book a place online and ask at the front desk. The workshops run every Tuesday morning.",
    "wrong": [
      14,
      24
    ],
    "explanation": "音频是 or，文中是 and；音频是 afternoon，文中是 morning。",
    "tip": "先扫一遍文本，听的时候只盯“和原文不一样”的地方。"
  },
  {
    "id": "fib-l-01",
    "type": "fib-l",
    "section": "listening",
    "level": 1,
    "time": 90,
    "title": "讲座开场（听写填空）",
    "instruction": "点播放听讲座，补全 3 个空。拼写必须正确。",
    "audio": "Good morning everyone. Today's lecture is about communication in the workplace. We will discuss three factors that affect productivity, and then look at some practical solutions.",
    "content": "Good morning everyone. Today's lecture is about [[1]] in the workplace. We will discuss three [[2]] that affect productivity, and then look at some [[3]] solutions.",
    "answers": [
      [
        "communication"
      ],
      [
        "factors"
      ],
      [
        "practical"
      ]
    ],
    "explanation": "三个词都是学术高频词：communication（不可数）、factors（复数）、practical（形容词）。听写填空每空 1 分，拼错就是 0。",
    "tip": "先看空格前后判断词性，听的时候只等那个词，不要整句翻译。"
  },
  {
    "id": "fib-l-02",
    "type": "fib-l",
    "section": "listening",
    "level": 2,
    "time": 90,
    "title": "气候变化（听写填空）",
    "instruction": "听音频，补全 3 个空。",
    "audio": "Climate change is affecting the availability of fresh water. In many regions, rainfall has become less predictable, and farmers must adapt their methods.",
    "content": "Climate change is affecting the [[1]] of fresh water. In many regions, rainfall has become less [[2]], and farmers must [[3]] their methods.",
    "answers": [
      [
        "availability"
      ],
      [
        "predictable"
      ],
      [
        "adapt"
      ]
    ],
    "explanation": "availability 拼写较长，注意 -ability；predictable 是“可预测的”；adapt 是“调整、适应”。",
    "tip": "长词先记开头和结尾，中间用音节补；写完后检查词性。"
  }
];
