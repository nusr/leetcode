const fs = require("fs");
const path = require("path");
const log = info => console.log(info);
const SOLUTION_LIST = require("./solution/result.json");
const configData = {
  parentDir: "./solution",
  outputDir: "./blog",
  noteName: "note.md",
  descName: "question.md",
  link: "https://leetcode.com/problems/",
  summary: "SUMMARY.md",
  introduce: "- [Introduction](README.md)"
};
class LeetCode {
  constructor(SOLUTION_LIST) {
    this.solutionList = SOLUTION_LIST || {};
  }
  generateDirectory(dirPath) {
    try {
      if (dirPath && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    } catch (err) {
      log(err);
    }
  }
  generateBlog() {
    this.generateDirectory(configData.outputDir);
    let summaryList = [];
    for (let item of Object.values(this.solutionList)) {
      if (item && item.id) {
        let filePath = `${configData.parentDir}/${this.formatId(item.id)}.${
          item.title
        }/`;
        let files = fs.readdirSync(filePath);
        let description = fs.readFileSync(
          filePath + configData.descName,
          "utf-8"
        );
        let analysis = "";
        let analysisPath = filePath + configData.noteName;
        if (fs.existsSync(analysisPath)) {
          analysis = fs.readFileSync(analysisPath, "utf-8") || "";
        }
        let codeContent = [];
        for (let file of files) {
          let ext = path.extname(file);
          if (ext !== ".md") {
            ext = ext.slice(1, ext.length);
            let code = fs.readFileSync(filePath + file, "utf-8");
            codeContent.push(`\`\`\`${ext}\n${code}\n\`\`\``);
          }
        }
        let upperTitle = `${this.formatId(item.id)}.${item.upperTitle}`;
        let markdown = `# [${upperTitle}](${configData.link}${item.title}/)
        \n## 问题
        \n${description}
        \n## 思路
        \n${analysis}
        \n## 代码
        \n${codeContent.join("\n")}`;
        let outputPath = `${configData.outputDir}/${this.formatId(item.id)}.${
          item.title
        }.md`;
        log(`write to ${outputPath}`);
        summaryList.push(`- [${upperTitle}](${outputPath})`);
        fs.writeFileSync(outputPath, markdown);
      }
    }
    summaryList.unshift(configData.introduce);
    fs.writeFileSync(
      configData.summary,
      `# Summary\n\n[github](https://github.com/nusr/leetcode)\n\n${summaryList.join(
        "\n"
      )}`
    );
  }
  formatId(id) {
    if (id < 10) {
      return "00" + id;
    } else if (id < 100) {
      return "0" + id;
    } else {
      return "" + id;
    }
  }
}
let leetCode = new LeetCode(SOLUTION_LIST);
leetCode.generateBlog();
