import { assert } from 'chai';
import add from '../calculator/add.js';
import subtract from '../calculator/subtract.js';
import multiply from '../calculator/multiply.js';
import divide from '../calculator/divide.js';

describe('Testing addition', () => {
  it('Testing addition of whole numbers - should return 8', () => {
    assert.equal(add(4, 4), 8);
  });
  it('Testing addition of decimals - should return 1', () => {
    assert.equal(add(0.3, 0.7), 1);
  });
  it('Testing addition with 0 - should return 8', () => {
    assert.equal(add(0, 8), 8);
  });
  it('Testing addition with a negative - should return 8', () => {
    assert.equal(add(-3, 11), 8);
  });
});

describe('Testing subtraction', () => {
  it('Testing subtraction whole numbers - should return 0', () => {
    assert.equal(subtract(4, 4), 0);
  });
  it('Testing subtraction of decimals - should return 2.0', () => {
    assert.equal(subtract(2.7, 0.7), 2.0);
  });
  it('Testing subtraction with 0 - should return -8', () => {
    assert.equal(subtract(0, 8), -8);
  });
  it('Testing subtraction with a negative - should return -14', () => {
    assert.equal(subtract(-3, 11), -14);
  });
});

describe('Testing multiplication', () => {
  it('Testing multiplication with whole numbers - should return 16', () => {
    assert.equal(multiply(4, 4), 16);
  });
  it('Testing multiplication of decimals - should return 0.21', () => {
    assert.equal(multiply(0.3, 0.7), 0.21);
  });
  it('Testing multiplication with 0 - should return 0', () => {
    assert.equal(multiply(0, 8), 0);
  });
  it('Testing multiplication with a negative - should return -33', () => {
    assert.equal(multiply(-3, 11), -33);
  });
});

describe('Testing division', () => {
  it('Testing division of whole numbers - should return 1', () => {
    assert.equal(divide(4, 4), 1);
  });
  it('Testing division of decimals - should return 6', () => {
    assert.equal(divide(1.2, 0.2), 6);
  });
  it('Testing division with positive number by 0 - should return Infinity', () => {
    assert.equal(divide(8, 0), 'Infinity');
  });
  it('Testing division 0 by 0 - should return NaN', () => {
    assert.equal(divide(0, 0), 'NaN');
  });
  it('Testing division with a negative by 0 - should return Infinity', () => {
    assert.equal(divide(-3, 0), '-Infinity');
  });
  it('Testing division with positive number - should return 6', () => {
    assert.equal(divide(18, 3), 6);
  });
  it('Testing division with negative number - should return -2', () => {
    assert.equal(divide(6, -3), -2);
  });
});
