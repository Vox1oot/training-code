import _ from 'lodash';
import {
  mkdir,
  mkfile,
  isFile,
  getName,
  getMeta,
  getChildren,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

const getFilesSize = (tree) => {
  if (isFile(tree)) {
    return getMeta(tree).size;
  }

  const children = getChildren(tree);
  const sizes = children.map(getFilesSize);
  return _.sum(sizes);
};

const compareNumbers = (a, b) => b[1] - a[1];

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), getFilesSize(child)]);

  result.sort(compareNumbers);
  return result;
};

console.log(du(getChildren(tree)[0]));
