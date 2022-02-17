const fromPairs = (coll) => {
  const result = {};

  for (const [key, value] of coll) {
    result[key] = value;
  }
  return result;
};

fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]);