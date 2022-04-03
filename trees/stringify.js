const stringify = (value, replacer = ' ', spaceCount = 1) => {
  if (typeof value !== 'object') {
    return value.toString();
  }

  const getStringifyObject = (value, replacer, spaceCountInner) => {
    const keyIndent = replacer.repeat(spaceCountInner);
    let closinBraceIndent = replacer.repeat(0);

    if (spaceCountInner > spaceCount) {
      closinBraceIndent = replacer.repeat(spaceCountInner - spaceCount);
    }

    const coll = Object.entries(value);

    const obj = coll.reduce((acc, innerArray) => {
      const [key, field] = innerArray;
      acc += `\n${keyIndent}${key}: `;

      if (field instanceof Object) {
        return `${acc}${getStringifyObject(field, replacer, (spaceCountInner + spaceCount))}`;
      }

      acc += `${field}`;
      return acc;
    }, '');

    return `{${obj}\n${closinBraceIndent}}`;
  };

  return `${getStringifyObject(value, replacer, spaceCount)}`;
};

const nested = {
  string: 'value',
  boolean: true,
  number: 5,
  float: 1.25,
  object: {
    5: 'number',
    1.25: 'float',
    null: 'null',
    true: 'boolean',
    value: 'string',
    nested: {
      boolean: true,
      float: 1.25,
      string: 'value',
      number: 5,
      null: null,
    },
  },
};

console.log(stringify(nested, '|-', 2));
