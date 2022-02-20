/* const arabic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']; */

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

const toRoman = (number) => {
  let result = '';
  let currentNumber = number;

  while (currentNumber) {
    if (setRomans[currentNumber]) {
      result += `${setRomans[currentNumber]}`;
      currentNumber -= currentNumber;
    }
  }
  console.log(result);
};

toRoman(1144);
