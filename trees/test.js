import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc', { owner: 'vitaliy' }),
    mkfile('consul.cfg', { owner: 'vitaliy' }),
  ], { owner: 'vitaliy' }),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ], { owner: 'vitaliy' }),
], { owner: 'vitaliy' });

const changeOwner = (tree, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if (isFile(tree)) {
    return mkfile(name, newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => changeOwner(child, owner));
  const newTree = mkdir(name, newChildren, newMeta);

  return newTree;
};

const newT = changeOwner(tree, 'Regina')
console.log(getChildren(newT));