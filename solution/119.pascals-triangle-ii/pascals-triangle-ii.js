/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let data = [];
    let numRows = Math.min(34,rowIndex + 1)
  for (let index = 1; index <= numRows; index++) {
    let temp = new Array(index);
    if (index >= 3) {
      let len = index - 1;
      let tempArr = data[len - 1];
      temp[0] = temp[len] = 1;
      for (let j = 1; j < len; j++) {
        temp[j] = tempArr[j - 1] + tempArr[j];
      }
    } else {
      temp = [1, 1].slice(0, index);
    }
    data.push(temp);
  }
  return data[rowIndex];
};