import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));

  return mkdir(name, newChildren, newMeta);
};

const showFiles = (tree) => {
  const name = getName(tree);

  if (isFile(tree)) {
    console.log(name);
    return;
  }

  const children = getChildren(tree);
  children.forEach(element => {
    showFiles(element);
  });
};

const newTree = downcaseFileNames(tree);
showFiles(newTree);
