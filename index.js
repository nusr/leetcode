const fs = require("fs");
const log = info => console.log(info);
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

let solutionList = readJsonFile("./solution.json");
function githubPath(type, item) {
  return `${type.toLowerCase()}/${item.questionFrontendId}.${item.title
    .split(" ")
    .join("_")}.md`;
}
function generateFile(list) {
  let {
    data: {
      topicTag: { questions, name }
    }
  } = list;
  let acceptList = [];
  let parentDir = name;

  generateDirectory(parentDir);
  for (let item of questions) {
    if (item.status === "ac") {
      let filePath = githubPath(parentDir, item);
      let check = fs.existsSync(filePath);
      if (check) {
        log(filePath);
      } else {
        fs.writeFileSync(
          filePath,
          `# [${item.questionFrontendId}.${
            item.title
          }](https://leetcode.com/problems/${item.titleSlug}/)
          \n## 问题  
          \n## 思路
          \n时间复杂度为 \`O(n)\`\n空间复杂度为 \`O(1)\`
          \n## 代码
          \n- \`js\``
        );
      }
      solutionList[item.questionFrontendId] = item;
    }
  }
}
generateFile(readJsonFile("./source/array.json"));
fs.writeFileSync("./solution.json", JSON.stringify(solutionList));
function updateReadMe() {
  let content = `# leetcode

  记录 \`javaScript\`,\`C\` 刷 leetcode 
  
  | #   | title  | solution | Acceptance | Difficulty | Topics | Companies |
  | --- | ---- | -------- | ----- | ---- | ---- | ---- |`;
  for (let item of Object.values(solutionList)) {
    let ac = JSON.parse(item.stats).acRate;
    let type = item.topicTags[0].name;
    let filePath = githubPath(type, item);
    content += `\n|${item.questionFrontendId}|[${
      item.title
    }](https://leetcode.com/problems/${
      item.titleSlug
    }/)|[js](${filePath})|${ac}|${item.difficulty}|${type}|${item.companyTags ||
      "无"}|`;
  }
  fs.writeFileSync("./README.md", content);
}
updateReadMe();
function readDirectory(dir) {
  fs.readdir(dir, (error, files) => {
    log(files);
  });
}
