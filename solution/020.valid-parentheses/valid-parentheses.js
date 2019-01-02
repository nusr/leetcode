/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
      let stack = []
      let top = -1
      if (!s) {
        return true
      }
      for (let i = 0;i < s.length;i++) {
        switch (s[i]) {
          case '(':
          case '{':
          case '[':
            stack[++top] = s[i];
            break;
          case ']':
            if (stack[top] == '[') {
              top--
              break;
            } else {
              return false
            };
          case '}':
            if (stack[top] == '{') {
              top--
              break;
            } else {
              return false
            };
          case ')':
            if (stack[top] == '(') {
              top--
              break;
            } else {
              return false
            };
        }
      }
      if (top === -1) {
        return true
      } else {
        return false
      }
    };