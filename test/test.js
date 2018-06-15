var assert = require('assert');
var ponsify = require('../dist/script.min.js');

describe('Ponsify', function () {
  it('should return the sum of integers between the lower and upper limits going in steps', function () {
    assert.equal(26, ponsify(2, 11, 3)); //(2, 11, 3)   9/3=3
    assert.equal(55, ponsify(1, 10, 1)); //10x11=110/2=55
    assert.equal(18, ponsify(3, 9, 3));  //3x3=9+9=18x9=162/(3x3)=18
  })
  it('should return X when the lower limit and upper limit are equal to X', function () {
    assert.equal(3, ponsify(3, 3, 3));
    assert.equal(2, ponsify(2, 2, 1));
    assert.equal(167167, ponsify(1, 1001, 3));
  })
  it('should return 0 when the upper limit is less than the lower limit', function () {
    assert.equal(0, ponsify(4, 3, 2));
  })
})
