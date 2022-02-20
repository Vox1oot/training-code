const findWhere = (books, param) => {
  const entries = Object.entries(param);

  for (const book of books) {
    let find = true;
    for (const [key, value] of entries) {
      if (book[key] !== value) {
        find = false;
      }
    }
    if (find) {
      return book;
    }
  }
  return null;
};

const books = [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ];

const parameters = { author: 'Shakespeare', year: 1611, title: 'The Tempest' };