import _ from 'lodash';

const merge = (...obj) => {
  const result = obj.reduce((acc, o) => {
    const keys = Object.keys(o)
      .map((key) => {
        if (!Object.hasOwn(acc, key)) {
          acc[key] = [];
        }
        acc[key].push(o[key]);
        acc[key] = _.uniq(acc[key]);
      });
    return acc;
  }, {});

  return result;
};

console.log(merge(
  { a: 1, b: 2, c: 3 },
  {},
  { a: 3, b: 2, d: 5 },
  { a: 6 },
  { b: 4, c: 3, d: 2 },
  { e: 9 },
));
