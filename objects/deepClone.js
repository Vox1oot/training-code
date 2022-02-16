import isObject from 'lodash/isObject.js';
/* const obj1 = { name: 'obj1', email: 'obj1@gmail.com', parents: { mother: 'Lubov', father: 'Vladmir' }};
const obj2 = Object.assign({}, obj1);
obj2.name = 'obj2';
obj2.parents = Object.assign({}, obj1.parents);
obj2.parents = { mother: 'Sveta', father: 'Kirill'};

console.log(obj1);
console.log(obj2); */

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const cloneDeep = (data) => {
  const result = {};
  const keys = Object.keys(data);

  for (const key of keys) {
    if (isObject(data[key])) {
      result[key] = cloneDeep(data[key]);
    } else {
      result[key] = data[key];
    }
  }
  return result;
};

cloneDeep(data);
