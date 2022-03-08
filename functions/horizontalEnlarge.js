const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

const horizontalEnlarge = (array) => array.map((row) => row.flatMap((a) => [a, a]));

const enlargeArrayImage = (array) => {
  const horizonItems = horizontalEnlarge(array);
  const result = horizonItems.flatMap((row) => [row, row]);
  return result;
};

export default enlargeArrayImage;

