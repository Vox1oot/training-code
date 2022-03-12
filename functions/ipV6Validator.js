import _ from 'lodash';

const isValidGroup = (group) => {
  const number = Number(`0x${group}`);
  return group.length <= 4 && !_.isNaN(number);
};

const isValidIPv6 = (ip) => {
  if (ip.indexOf('::') !== ip.lastIndexOf('::')) {
    return false;
  }

  const isShort = ip.includes('::');
  const groups = ip.split('::')
    .filter((group) => group !== '')
    .flatMap((part) => part.split(':'));
  console.log(groups);
  const length = isShort ? groups.length + 2 : groups.length;

  if ((!isShort && length < 8) || length > 8) {
    return false;
  }

  return groups.every(isValidGroup);
};
