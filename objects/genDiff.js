const obj1 = { one: 'eon', two: 'two', four: true };

const obj2 = { two: 'own', zero: 4, four: true };

const genDiff = (obj1, obj2) => {
  const result = {};
  const merge = {...obj1, ...obj2};
  const keys = Object.keys(merge);

  for (const key of keys) {
    if (!Object.hasOwn(obj1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(obj2, key)) {
      result[key] = 'deleted';
    } else if (obj1[key] !== obj2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

console.log(genDiff(obj1, obj2));
