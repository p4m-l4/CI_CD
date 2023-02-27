import {assert} from "chai";
import {add, multiply,subtract, divide} from "../calculator.js";

describe('Testing addition', () => {
    it('should return 8', () => {
        assert.equal(add(4,4), 8)
    })
});
describe('Testing multiplication', () => {
    it('should return 16', () => {
        assert.equal(multiply(4,4), 16)
    })
});
describe('Testing subtraction', () => {
    it('should return 0', () => {
        assert.equal(subtract(4,4), 0)
    })
});
describe('Testing division', () => {
    it('should return 1', () => {
        assert.equal(divide(4,4), 1)
    })
});
describe('Testing addition', () => {
    it('should return 8', () => {
        assert.equal(add(4,4), 8)
    })
});