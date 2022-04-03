import {
  mkdir,
  mkfile,
  getName,
  isFile,
  isDirectory,
  getChildren,
} from '@hexlet/immutable-fs-trees';
import cloneDeep from 'lodash/cloneDeep.js';

const map = (n, tree) => {
  const newName = getName(n(tree));
  const newMeta = cloneDeep(tree.meta);

  if (isFile(tree)) {
    return mkfile(newName, newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => map(n, child));

  return mkdir(newName, newChildren, newMeta);
};

const filter = (n, tree) => {
  const name = getName(tree);
  const newMeta = cloneDeep(tree.meta);
  const children = getChildren(tree);

  if (!n(tree)) {
    return [];
  }

  if (isFile(tree)) {
    return mkfile(name, newMeta);
  }

  const newChildren = children.flatMap((child) => filter(n, child));
  return mkdir(name, newChildren, newMeta);
};

const reduce = (fn, tree, begin) => {
  const accumulator = fn(begin, tree);

  if (isFile(tree)) {
    return accumulator;
  }

  const children = getChildren(tree);
  const result = children
    .flatMap((node) => reduce(fn, node, accumulator))
    .reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);

  return result;
};

const tree = mkdir('/', [
  mkdir('eTc', [mkdir('NgiNx'), mkdir('CONSUL', [mkfile('config.json')])]),
  mkfile('hOsts'),
]);

console.log(reduce((acc, n) => (n.type === 'directory' ? acc + 1 : acc), tree, 0));
