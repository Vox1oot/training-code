const sumDigPow = (a, b) => {
  const result = [];
  let begin = a;
  let end = b;

  for (begin; begin <= end; begin += 1) {
    const arr = String(begin).split('');
    let degree = 1;
    let sum = 0;
    for (const num of arr) {
      sum += num ** degree;
      degree += 1;
    }
    if (begin === sum) {
      result.push(begin);
    }
  }
  return result;
};

console.log(sumDigPow(90, 100));
