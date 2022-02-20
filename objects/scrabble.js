const scrabble = (sequence, world) => {
  const lowerWorld = world.toLowerCase();
  const coll = {};

  for (const char of sequence) {
    coll[char.toLowerCase()] = (coll[char.toLowerCase()] ?? 0) + 1;
  }

  for (const char of lowerWorld) {
    if (!Object.hasOwn(coll, char)) {
      return false;
    }
    if (coll[char] === 0) {
      return false;
    }
    coll[char] -= 1;
  }
  return true;
};
