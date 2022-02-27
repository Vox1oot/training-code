const setRomans = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

const setArabic = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const toRoman = (number) => {
  const keys = Object.keys(setRomans);
  let index = keys.length - 1;
  let result = '';

  while (number > 0) {
    if (number >= keys[index]) {
      result += setRomans[keys[index]];
      number -= keys[index];
    } else {
      index -= 1;
    }
  }
  return result;
};

const toArabic = (roman) => {
  let romanNumber = roman;
  let result = 0;

  for (let index = 1; index <= romanNumber.length; index += 1) {
    let currenNumber = romanNumber.substring(0, index);

    if (setArabic[currenNumber]) {
      result += setArabic[currenNumber];
      romanNumber = romanNumber.slice(0, index);
    }
  }
  console.log(result);
};

toArabic('DLXXV');
