import isObject from 'lodash/isObject.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const cloneDeep = (obj) => {
  const result = {};
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (isObject(obj[key])) {
      result[key] = cloneDeep(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

console.log(cloneDeep(data));
