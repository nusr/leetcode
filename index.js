const fs = require("fs")
const path = require("path")
const log = (info) => console.log(info)
const SOLUTION_LIST = require("./solution/result.json")
const configData = {
  parentDir: "./solution",
  outputDir: "blog",
  noteName: "note.md",
  descName: "question.md",
  blogEntry: "blog.md",
  encode: "utf-8",
  readMe: "./README.md",
  link: "https://leetcode.com/problems/",
  summary: "SUMMARY.md",
  introduce: "- [Introduction](README.md)"
}
class LeetCode {
  constructor(SOLUTION_LIST) {
    this.solutionList = SOLUTION_LIST || {}
  }
  generateDirectory(dirPath) {
    try {
      if (dirPath && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    } catch (err) {
      log(err)
    }
  }
  generateBlog() {
    this.generateDirectory(configData.outputDir)
    let summaryList = []
    for (let item of Object.values(this.solutionList)) {
      if (item && item.id) {
        let filePath = `${configData.parentDir}/${this.formatId(item.id)}.${
          item.title
        }/`
        let files = fs.readdirSync(filePath)
        let description = fs.readFileSync(
          filePath + configData.descName,
          configData.encode
        )
        let analysis = ""
        let analysisPath = filePath + configData.noteName
        if (fs.existsSync(analysisPath)) {
          analysis = fs.readFileSync(analysisPath, configData.encode) || ""
        }
        let codeContent = []
        for (let file of files) {
          let ext = path.extname(file)
          if (ext !== ".md") {
            ext = ext.slice(1, ext.length)
            let code = fs.readFileSync(filePath + file, configData.encode)
            codeContent.push(`\`\`\`${ext}\n${code}\n\`\`\``)
          }
        }
        let upperTitle = `${this.formatId(item.id)}.${item.upperTitle}`
        let markdown = `# [${upperTitle}](${configData.link}${item.title}/)
        \n## 问题
        \n${description}
        \n## 思路
        \n${analysis}
        \n## 代码
        \n${codeContent.join("\n")}`
        let outputPath = `${configData.outputDir}/${this.formatId(item.id)}.${
          item.title
        }.md`
        log(`write to ${outputPath}`)
        summaryList.push(`- [${upperTitle}](${outputPath})`)
        fs.writeFileSync(outputPath, markdown)
      }
    }
    summaryList.unshift(configData.introduce)
    fs.writeFileSync(
      configData.summary,
      `# Summary\n\n${summaryList.join("\n")}`
    )
    this.generateBlogEntry()
  }
  formatId(id) {
    if (id < 10) {
      return "00" + id
    } else if (id < 100) {
      return "0" + id
    } else {
      return "" + id
    }
  }

  deleteMd(parentDir) {
    try {
      let files = fs.readdirSync(parentDir)
      for (let file of files) {
        if (path.extname(file) === ".md") {
          fs.unlinkSync(parentDir + file)
        }
      }
      fs.rmdir(parentDir, (err) => {
        if (err) {
          log(err)
        }
      })
    } catch (err) {}
  }
  problemLevel(item) {
    switch (item.level) {
      case 1:
        return "Easy"
      case 2:
        return "Medium"
      default:
        return "Hard"
    }
  }
  generateBlogEntry() {
    let file = fs.readFileSync(configData.readMe, configData.encode) || ""
    let header = file.match(/([\s\S]*)<\/p>/)
    let list = []
    for (let item of Object.values(this.solutionList)) {
      if (!item || !item.title) {
        continue
      }
      let id = this.formatId(item.id)
      list.push(
        `|${id}|[${item.title}](https://leetcode.com/problems/${
          item.title
        }/) |[${item.language}](https://nusr.github.io/${configData.outputDir}/${id}.${
          item.title
        })|${this.problemLevel(item)}|${item.acceptance}|  ${
          item.paidOnly ? "Yes" : "No"
        }|`
      )
    }
    let markdown =
      header[0] +
      `\n\n|#|Problems|Solutions|Difficulty|Acceptance|Paid-Only|\n|--|--|--|--|--|--|\n` +
      list.join("\n")
    fs.writeFileSync(configData.blogEntry, markdown)
  }
}
let leetCode = new LeetCode(SOLUTION_LIST)
let cmd = process.argv[2]

leetCode.deleteMd("./_book/blog/")
leetCode.deleteMd("./blog/")
leetCode.generateBlog()
