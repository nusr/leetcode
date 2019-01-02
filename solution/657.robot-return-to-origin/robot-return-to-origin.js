/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
      let upDown = 0
      let rightLeft = 0
      for (let i = 0;i < moves.length;i++) {
        let key = moves.charAt(i).toLowerCase()
        switch (key) {
          case 'r': rightLeft++; break;
          case 'l': rightLeft--; break;
          case 'u': upDown++; break;
          case 'd': upDown--; break;
        }
      }
      return upDown === 0 && rightLeft === 0
    };