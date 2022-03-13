import _ from 'lodash';

const getOne = () => 1;
console.log(getOne());

const numbers = _.times(5, getOne);
console.log(numbers);
