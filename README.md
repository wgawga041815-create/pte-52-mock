# PTE 52 Mock · 独立模考站

只做 PTE Academic **阅读 + 听力** 的计时模考：选套题 → 考试 → 交卷估分 → 逐题解析。不包含练习题库、课程页面。

## 运行

- 直接双击 `index.html` 即可（file:// 可用）。
- 或放到任意静态服务器：把这个文件夹整个上传即可，无需构建、无需后端。

## 内容

- **完整版 1 套**：31 题 / 64 分钟
  - 阅读 14 题 / 29 分钟：FIB-RW 5、拖拽 FIB 4、RO 3、多选 1、单选 1
  - 听力 17 题 / 35 分钟：SST 1（自评）、听力多选 2、听力单选 2、FIB-L 2、HCS 2、SMW 2、HIW 2、WFD 4
- **迷你卷 3 套**：A/B/C，各 12 题 / 30 分钟，用于日常。

## 评分

- 阅读、听力分别算正确率，折算成 10–90：`10 + 正确率 × 80`。
- 总分 = 阅读估分与听力估分的平均。
- SST 标为“自评”，不计入估分。
- 估分只用于练习定位，不是官方 PTE 成绩。

## 文件

```
index.html
assets/styles.css        样式
assets/questions.js      模考引用到的练习题目（已裁剪）
assets/mock-questions.js 模考题库 + 套题配置 window.MOCKS
assets/exam.js           考试流程、渲染、评分、报告
```

## 换题

编辑 `assets/mock-questions.js`：

- `window.MOCK_QUESTIONS` 里加题，字段参考现有题目（`id/type/title/instruction/...`）。
- `window.MOCKS` 里把 `qids` 换成新题目 id，`time` 按秒写。

支持题型：`fib-rw`、`fib-r`、`ro`、`mcq-s`、`mcq-m`、`wfd`、`fib-l`、`hiw`、`sst`、`mcq-l`、`hcs`、`smw`。

> 题目按官方题型自编，不是真题原文；真实 PTE 题目受版权保护，请勿直接搬运。
