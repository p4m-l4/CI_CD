import { assert } from 'chai';
import add from '../calculator/add.js';
import subtract from '../calculator/subtract.js';
import multiply from '../calculator/multiply.js';
import divide from '../calculator/divide.js';

describe('Testing addition', () => {
  it('should return 8', () => {
    assert.equal(add(4, 4), 8);
  });
});
describe('Testing multiplication', () => {
  it('should return 16', () => {
    assert.equal(multiply(4, 4), 16);
  });
});
describe('Testing subtraction', () => {
  it('should return 0', () => {
    assert.equal(subtract(4, 4), 0);
  });
});
describe('Testing division', () => {
  it('should return 1', () => {
    assert.equal(divide(4, 4), 1);
  });
});
