const phoneBook = [
  { name: 'Alex Bowman', number: '48-2002' },
  { name: 'Aric Almirola', number: '10-1001' },
  { name: 'Bubba Wallace', number: '23-1111' },
];

const findNumberByName = (array, name) => {
  if (array.length === 0) {
    return null;
  }

  const index = Math.trunc(array.length / 2);

  if (array[index].name === name) {
    return array[index].number;
  }

  if (array[index].name > name) {
    const arraySlice = array.slice(0, index);
    return findNumberByName(arraySlice, name);
  } else {
    const arraySlice = array.slice(index + 1);
    return findNumberByName(arraySlice, name);
  }
};

console.log(findNumberByName(phoneBook, 'Bubba Wallace'));