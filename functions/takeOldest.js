const phoneBook = [
  { name: 'Alex Bowman', number: '48-2002' },
  { name: 'Aric Almirola', number: '10-1001' },
  { name: 'Bubba Wallace', number: '23-1111' },
];

const findNumberByName = (phoneBook, name) => {
  if (phoneBook.length === 0) {
    return null;
  }

  let counter = true;
  let result = '';
  let index = Math.trunc(phoneBook.length / 2);

  while (counter) {
    if (phoneBook[index].name === name) {
      result = phoneBook[index].number;
      counter = false;
    } else {
      index = phoneBook[index].name < name ? index + 1 : index - 1;
    }
  }
  return result;
};

console.log(findNumberByName(phoneBook, 'Arex Bowman'));
