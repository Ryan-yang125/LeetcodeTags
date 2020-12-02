/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let a = [];
  for (let c of s) {
    if (c == "(" || c == "[" || c == "{") {
      a.push(c);
    }
    if (!a.length) return false;
    if (c == ")" && a.pop() != "(") return false;
    if (c == "]" && a.pop() != "[") return false;
    if (c == "}" && a.pop() != "{") return false;
  }
  return a.length === 0;
};
