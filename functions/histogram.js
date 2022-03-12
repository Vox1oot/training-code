import _ from 'lodash';

const rollDie = () => {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
};

const play = (countThrow) => {
  const obj = {
    1: '$',
    2: '$',
    3: '$',
    4: '$',
    5: '$',
    6: '$',
  };

  for (let i = 0; i < countThrow; i += 1) {
    const edge = rollDie();
    obj[edge] += '#';
  }

  const keys = Object.keys(obj);

  keys.map((key) => {
    const replaceString = obj[key].replace('$', '');
    const stringLen = obj[key].length - 1;

    const result = stringLen ? `${key}|${replaceString} ${stringLen}` : `${key}|${replaceString}`;
    console.log(result);
  })
};

play(10);
