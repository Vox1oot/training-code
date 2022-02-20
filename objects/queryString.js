const buildQueryString = (list) => {
  const keys = Object.keys(list).sort();
  let result = '';

  for (const key of keys) {
    result += `${key}=${list[key]}&`;
  }

  return result.substring(0, result.length - 1);
};
