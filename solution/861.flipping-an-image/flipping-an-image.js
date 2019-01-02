/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let result = [];
    for(let i = 0;i < A.length;i++){
        result[i] = A[i].reverse()
    }
     for(let i = 0;i < result.length;i++){
        result[i] = result[i].map(item => +!item);
    }
    return result;
};