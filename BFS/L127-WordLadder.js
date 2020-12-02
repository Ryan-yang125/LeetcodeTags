/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
//BFS 一边遍历一遍检查
var ladderLength = function (beginWord, endWord, wordList) {
  let isSimilar = (s1, s2) => {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) count++;
      if (count > 1) return false;
    }
    return true;
  };
  let q = [beginWord];
  let index = wordList.indexOf(beginWord);
  if (index != -1) wordList.splice(index, 1);
  let level = 1;
  while (q.length) {
    let size = q.length;
    while (size--) {
      let word = q.shift();
      for (let i = 0; i < wordList.length; i++) {
        if (!isSimilar(wordList[i], word)) continue;
        if (wordList[i] == endWord) return level + 1;
        q.push(wordList[i]);
        wordList.splice(i, 1);
        i--;
      }
    }
    level++;
  }
  return 0;
};
