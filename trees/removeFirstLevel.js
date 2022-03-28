/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое, элементами которого являются дети вложенных узлов */

/* const removeFirstLevel = (tree) => {
  const result = tree.filter((node) => Array.isArray(node)).flat(1);
  return result;
}; */

const removeFirstLevel = (tree) => tree
  .filter((node) => Array.isArray(node))
  .flat(1);

const tree1 = [[5], 1, [3, 4]];
console.log(removeFirstLevel(tree1));
