import chunk from 'lodash/chunk.js';

const ipToInt = (ip) => {
  let hex = ip
    .split('.')
    .map((num) => parseInt(num).toString(16).padStart(2, 0))
    .join('');
  return parseInt(hex, 16);
};

const intToIp = (number) => {
  const ip = number.toString(16).padStart(8, 0);
  return chunk(ip, 2)
    .map((octet) => parseInt(octet.join(''), 16))
    .join('.');
};

console.log(ipToInt('0.0.0.0'));
console.log(intToIp(167801600));
