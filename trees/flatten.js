const flatten = (arr) => arr.reduce((acc, element) => {
  if (Array.isArray(element)) {
    return [...acc, ...flatten(element)];
  }
  return [...acc, element];
}, []);

const list = [1, 2, [3, 5], [[4, 3], 2]];
console.log(flatten(list));