let tags = {
  "/tag/array/": "数组",
  "/tag/dynamic-programming/": "动态规划",
  "/tag/string/": "字符串",
  "/tag/math/": "数学",
  "/tag/tree/": "树",
  "/tag/hash-table/": "哈希表",
  "/tag/depth-first-search/": "深度优先搜索",
  "/tag/binary-search/": "二分查找",
  "/tag/two-pointers/": "双指针",
  "/tag/breadth-first-search/": "广度优先搜索",
  "/tag/greedy/": "贪心算法",
  "/tag/stack/": "栈",
  "/tag/backtracking/": "回溯算法",
  "/tag/design/": "设计",
  "/tag/linked-list/": "链表",
  "/tag/bit-manipulation/": "位运算",
  "/tag/heap/": "堆",
  "/tag/graph/": "图",
  "/tag/sort/": "排序",
  "/tag/union-find/": "并查集",
  "/tag/divide-and-conquer/": "分治算法",
  "/tag/binary-search-tree/": "二叉搜索树",
  "/tag/trie/": "字典树",
  "/tag/recursion/": "递归",
  "/tag/queue/": "队列",
  "/tag/segment-tree/": "线段树",
  "/tag/random/": "Random",
  "/tag/binary-indexed-tree/": "树状数组",
  "/tag/minimax/": "极小化极大",
  "/tag/topological-sort/": "拓扑排序",
  "/tag/brainteaser/": "脑筋急转弯",
  "/tag/geometry/": "几何",
  "/tag/map/": "Map",
  "/tag/rejection-sampling/": "Rejection Sampling",
  "/tag/reservoir-sampling/": "蓄水池抽样",
  "/tag/memoization/": "记忆化"
};
const fs = require("fs");
const path = require("path");
const log = info => console.log(info);
const SOLUTION_LIST = require("./solution/result.json");
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
  go: "go",
  mysql: "sql"
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
  generateSummary() {
    let parentDir = "./solution";
    let directorys = fs.readdirSync(parentDir);
    
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
leetCode.generateSummary();
