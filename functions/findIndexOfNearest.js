const getDistance = (numbers, value) => numbers.map((num) => Math.abs(num - value));

const findIndexOfNearest = (numbers, value) => {
  if (numbers.length === 0) {
    return null;
  }

  const distances = getDistance(numbers, value);
  const minDistance = Math.min(...distances);
  return distances.indexOf(minDistance);
};

console.log(findIndexOfNearest([], 4));
