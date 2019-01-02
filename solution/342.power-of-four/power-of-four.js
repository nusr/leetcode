/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let temp = 1;
    for(let i = 0;i < 16;i++){
        if(temp === num){
            return true;
        }else {
            temp = temp * 4;
        }
    }
    return false;
};