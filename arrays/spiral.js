const matrix = [[]];

const buildSnailPath = (coll) => {
  const result = [];

  if (coll.length !== 0) {
    let top = 0;
    let down = coll.length - 1;
    let left = 0;
    let right = coll[0].length - 1;
    let direction = 0;

    while (top <= down && left <= right) {
      if (direction === 0) {
        for (let i = left; i <= right; i += 1) {
          result.push(coll[top][i]);
        }
        top += 1;
      } else if (direction === 1) {
        for (let i = top; i <= down; i += 1) {
          result.push(coll[i][right]);
        }
        right -= 1;
      } else if (direction === 2) {
        for (let i = right; i >= left; i -= 1) {
          result.push(coll[down][i]);
        }
        down -= 1;
      } else if (direction === 3) {
        for (let i = down; i >= top; i -= 1) {
          result.push(coll[i][left]);
        }
        left += 1;
      }
      direction = (direction + 1) % 4;
    }
  }
  return result;
};

console.log(buildSnailPath(matrix));
