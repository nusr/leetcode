/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let t = parseInt(str)
    if(typeof(t) === 'number' && !isNaN(t)){
        if(t < -2147483648){
            return -2147483648
        }else if(t > 2147483647 ){
            return 2147483647
        }else {
            return t
        }
    }else {
        return 0
    }
};