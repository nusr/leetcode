const fs = require("fs")
const path = require("path")
let directories = [
  "/tag/array/",
  "/tag/dynamic-programming/",
  "/tag/string/",
  "/tag/math/",
  "/tag/tree/",
  "/tag/hash-table/",
  "/tag/depth-first-search/",
  "/tag/binary-search/",
  "/tag/two-pointers/",
  "/tag/breadth-first-search/",
  "/tag/stack/",
  "/tag/backtracking/",
  "/tag/design/",
  "/tag/greedy/",
  "/tag/linked-list/",
  "/tag/bit-manipulation/",
  "/tag/heap/",
  "/tag/sort/",
  "/tag/graph/",
  "/tag/divide-and-conquer/",
  "/tag/trie/",
  "/tag/union-find/",
  "/tag/binary-search-tree/",
  "/tag/recursion/",
  "/tag/segment-tree/",
  "/tag/queue/",
  "/tag/random/",
  "/tag/binary-indexed-tree/",
  "/tag/minimax/",
  "/tag/topological-sort/",
  "/tag/brainteaser/",
  "/tag/geometry/",
  "/tag/map/",
  "/tag/rejection-sampling/",
  "/tag/reservoir-sampling/",
  "/tag/memoization/"
]
// for (let item of directories) {
//   let paths = item.split("/")
//   paths.pop()
//   let path = paths.pop()
//   console.log(path)
//   generateDirectory(path)
// }
function generateDirectory(dirPath) {
  try {
    if (dirPath && !fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
    }
  } catch (err) {
    console.log(err)
  }
}
readDirectory(path.dirname(__filename))
function readDirectory(dir) {
  fs.readdir(dir, (error, files) => {
    console.log(files)
  })
}
