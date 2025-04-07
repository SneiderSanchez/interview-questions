export function mostFrequentByNum(words, num) {
  const objMap = {};
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    objMap[element] = (objMap[element] || 0) + 1;
  }

  const sortedArr = Object.keys(objMap)
    .sort((a, b) => objMap[b] - objMap[a])
    .sort((a, b) => {
      if (objMap[a] === objMap[b]) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      }
      return 0;
    });

  return sortedArr.slice(0, num);
}

console.log(mostFrequentByNum(["bbb", "hola", "hola", "aaa"], 2));
