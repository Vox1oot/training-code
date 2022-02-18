const chainArray = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const dnaToRna = (dna) => {
  const dnaArray = [...dna];
  const result = [];

  for (const nucleotide of dnaArray) {
    if (chainArray[nucleotide] === undefined) {
      return null;
    }
    result.push(chainArray[nucleotide]);
  }
  return result.join('');
};

console.log(dnaToRna('ACNTG'));
