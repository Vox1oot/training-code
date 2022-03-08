/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. */

const test = [-1, 0, 1, -3, 10, -2];

const isEven = (num) => (num % 2 === 0); // true or false;

const sameParityFilter = (numbers) => {
  const firstItem = isEven(numbers[0]);
  return numbers.filter((num) => isEven(num) === firstItem);
};

console.log(sameParityFilter(test));
