import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkfile('hosts'),
]);

const findEmptyDirPaths = (tree) => {
  const iter = (node, depth) => {
    const name = getName(node);
    const children = getChildren(node);

    if (children.length === 0) {
      return name;
    }

    if (depth === 2) {
      return [];
    }

    return children.filter((child) => !isFile(child)).flatMap((child) => iter(child, depth + 1));
  };

  return iter(tree, 0);
};

console.log(findEmptyDirPaths(tree));