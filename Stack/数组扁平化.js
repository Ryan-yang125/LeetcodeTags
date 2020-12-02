/**
 * @param {NestedArray} nestedList
 * @return {Array}
 */
//[1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]
let flattern = (nestedList) => {
  let ans = [];
  let flat = (target, arr) => {
    arr.forEach((value, index) => {
      if (Array.isArray(value)) flat(target, value);
      else target.push(value);
    });
  };
  flat(ans, nestedList);
  return ans;
};
//reduce
let flattern = (nestedList) =>
  nestedList.reduce(
    (prev, curr) => prev.concat(Array.isArray(curr) ? flattern(curr) : curr),
    []
  );
