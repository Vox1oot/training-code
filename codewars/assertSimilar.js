const assertSimilar = (arr) => {
  const result = arr.map((elem, index) => `${index + 1}: ${elem}`);
  return result;
};

console.log(assertSimilar(["a", "b", "c"]));