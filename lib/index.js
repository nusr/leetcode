const fs = require("fs");
const Mustache = require("mustache");
const log = info => console.log(info);
const SOLUTION_LIST = require("../solution/result.json");
const languageMap = {
  "c++": "cpp",
  java: "java",
  c: "c",
  "c#": "cs",
  javascript: "js",
  python: "py",
  python3: "py",
  ruby: "rb",
  swift: "swift",
  go: "go"
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
  githubPath(item) {
    return `/solution/${this.formatId(item.id)}.${item.title}/question.md`;
  }
  getDifficulty(difficulty) {
    switch (difficulty) {
      case 2:
        return "Medium";
      case 3:
        return "Hard";
      default:
        return "Easy";
    }
  }
  generateMarkdown() {
    let language = {};
    const templatePath = "./lib/README.tpl";
    let tpl = fs.readFileSync(templatePath, "utf-8");
    let hardNum = 0;
    let easyNum = 0;
    let mediumNum = 0;

    let solutions = [];
    for (let item of Object.values(this.solutionList)) {
      if (typeof item !== "object") {
        continue;
      }
      let idStr = this.formatId(item.id);
      let solutionLinks = [];
      for (let lang in languageMap) {
        let linkPath = `./solution/${idStr}.${item.title}/${item.title}.${
          languageMap[lang]
        }`;
        if (!fs.existsSync(linkPath)) {
          continue;
        }
        let link = ` [**${lang}**](${linkPath})`;
        solutionLinks.push(link);
        language[lang] = 1;
      }
      let difficulty = this.getDifficulty(item.level);
      switch (difficulty) {
        case "Easy":
          easyNum++;
          break;
        case "Medium":
          mediumNum++;
          break;
        case "Hard":
          hardNum++;
          break;
      }
      solutions.push({
        id: idStr,
        title: item.title,
        solutionLinks: solutionLinks.join("  "),
        difficulty,
        paidOnly: item.paidOnly ? ":heavy_check_mark:" : "",
        acceptance: item.acceptance
      });
    }
    solutions.sort((a, b) => {
      return parseInt(a.id, 10) - parseInt(b.id, 10);
    });
    const viewData = {
      language: Object.keys(language).join(" "),
      total: this.solutionList.total,
      solved: this.solutionList.solved,
      locked: this.solutionList.locked,
      hard: hardNum,
      medium: mediumNum,
      easy: easyNum,
      time: this.getTimeStr("yyyy-MM-dd"),
      solutions: solutions
    };
    let readmeContent = Mustache.render(tpl, viewData);
    fs.writeFileSync("./README.md", readmeContent);
  }
  getTimeStr(fmt) {
    let time = new Date();
    let o = {
      "M+": time.getMonth() + 1, // 月份
      "d+": time.getDate(), // 日
      "h+": time.getHours(), // 小时
      "m+": time.getMinutes(), // 分
      "s+": time.getSeconds(), // 秒
      "q+": Math.floor((time.getMonth() + 3) / 3), // 季度
      S: time.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (time.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    }
    return fmt;
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
leetCode.generateMarkdown();
