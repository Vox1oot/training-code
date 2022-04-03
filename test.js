const input = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
};

const buildString = (obj) => {
   const keys = Object.keys(obj);
   const result = keys.reduce((acc, key, index, arr) => {
    
   }, []);

   console.log(result);
};

buildString(input);