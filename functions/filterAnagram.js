/* Анаграммы — это слова, которые состоят из одинаковых букв. Например:

спаниель — апельсин
карат — карта — катар
топор — ропот — отпор
filterAnagrams.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.

Примеры
filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']
 
filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']
 
filterAnagrams('laser', ['lazing', 'lazy',  'lacer']); */

const sortSequence = (string) => string.split('').sort().join('');

const filterAnagrams = (sequence, chekingList) => {
  const currentSeq = sortSequence(sequence);
  const result = chekingList.filter((elem) => sortSequence(elem) === currentSeq);
  return result;
};

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
