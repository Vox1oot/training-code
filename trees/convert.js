/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив определённой структуры и возвращает объект, полученный из этого массива.

Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы. Каждое значение внутри него — это массив из двух элементов, где первый элемент — ключ, а второй — значение. В свою очередь, если значение тоже является массивом, то считается, что это вложенное представление ассоциативного массива. Другими словами, любой массив внутри исходного массива всегда рассматривается как данные, которые нужно конвертировать в объект. */

const convert = (coll) => {
  const result = coll.reduce((obj, element) => {
    const [key, value] = element;
    const currentValue = Array.isArray(value) ? convert(value) : value;
    return { ...obj, [key]: currentValue };
  }, {});
  return result;
};

const coll = ([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2'],
]);
console.log(convert(coll));
