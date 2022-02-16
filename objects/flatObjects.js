const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

const get = (data, keys) => {
  let current = data;

  for (const key of keys) {
    const isProperty = Object.hasOwn(current, key);

    if (!isProperty) {
      return null;
    }
    current = current[key];
  }

  return current;
};
console.log(get(data, ['hosts', 1]));
