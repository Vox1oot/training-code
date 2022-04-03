import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');
