/* Для задания цветов в HTML и CSS используются числа в шестнадцатеричной системе счисления. Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом ставят символ решетки #, например, #135278. Обозначение цвета (rrggbb) разбивается на три составляющие, где первые два символа обозначают красную компоненту цвета, два средних — зеленую, а два последних — синюю. Таким образом каждый из трех цветов — красный, зеленый и синий — может принимать значения от 00 до FF в шестнадцатеричной системе исчисления.

solution.js
При работе с цветами часто нужно получить отдельные значения красного, зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и наоборот. Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(), которые возвращают соответствующие представление цвета.

Примеры
hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }

rgbToHex(36, 171, 0); // '#24ab00' */
import chunk from 'lodash/chunk.js';

const rgbToHex = (...numbers) => {
  const hex = numbers
    .map((num) => num.toString(16).padStart(2, 0))
    .join('');
  return `#${hex}`;
};

const hexToRgb = (hex) => {
  const [r, g, b] = chunk(hex.slice(1), 2)
    .map((channel) => channel.join(''))
    .map((channel) => parseInt(channel, 16));
  return { r, g, b };
};

console.log(hexToRgb('#00840c'));
console.log(rgbToHex(0, 132, 12));
