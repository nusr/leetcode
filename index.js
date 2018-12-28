const fs = require("fs");
const log = info => console.log(info);
let solutionList = require("./solutionList.json");
let questionList = require("./questionList.json");
function generateDirectory(dirPath) {
  try {
    if (dirPath && !fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  } catch (err) {
    log(err);
  }
}
function readJsonFile(filePath) {
  try {
    let data = fs.readFileSync(filePath);
    data = data ? JSON.parse(data) : null;
    return data;
  } catch (error) {
    log(error, false);
  }
}

function githubPath(item) {
  let { stat } = item;
  return `solution/${stat.frontend_question_id}.${
    stat.question__title_slug
  }.md`;
}
function generateFile(list) {
  generateDirectory("./solution");
  let { stat_status_pairs } = list;
  for (let item of stat_status_pairs) {
    if (item.status === "ac") {
      let filePath = githubPath(item);
      let {
        stat: { frontend_question_id, question__title_slug, question__title }
      } = item;
      let check = fs.existsSync(filePath);
      if (check) {
        log(filePath);
      } else {
        fs.writeFileSync(
          filePath,
          `# [${frontend_question_id}.${question__title}](https://leetcode.com/problems/${question__title_slug}/)
          \n## 问题
          \n## 思路
          \n时间复杂度为 \`O(n)\`\n空间复杂度为 \`O(1)\`
          \n## 代码
          \n- \`js\``
        );
      }
      solutionList[frontend_question_id] = item;
    }
  }
}
function getDifficulty(difficulty) {
  switch (difficulty) {
    case 2:
      return "Medium";
    case 3:
      return "Hard";
    default:
      return "Easy";
  }
}
function updateReadMe() {
  let content = `# leetcode

  记录 \`javaScript\`,\`C\` 刷 leetcode 
  
  | #   | title  | solution | Acceptance | Difficulty |
  | --- | ---- | -------- | ----- | ---- | `;
  for (let item of Object.values(solutionList)) {
    let { stat } = item;
    let ac = (stat.total_acs / stat.total_submitted) * 100 + "%";
    let filePath = githubPath(item);
    let mdContent = fs.readFileSync(filePath, "utf-8");
    let solution = "";
    if (mdContent && mdContent.includes("- `C`")) {
      solution = "C";
    }
    if (mdContent && mdContent.includes("- `js`")) {
      if (solution) {
        solution += ",javaScript";
      } else {
        solution = "javaScript";
      }
    }
    content += `\n|${stat.frontend_question_id}|[${
      stat.question__title
    }](https://leetcode.com/problems/${
      stat.question__title_slug
    }/)|[${solution}](${filePath})|${ac}|${getDifficulty(item.difficulty)}|`;
  }
  fs.writeFileSync("./README.md", content);
}

generateFile(questionList);
updateReadMe();
fs.writeFileSync("solutionList.json", JSON.stringify(solutionList));
