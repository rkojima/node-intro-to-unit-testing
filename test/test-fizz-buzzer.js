require('chai').should();
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should give different responses based on what the number is perfectly divisible by', function() {
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 5, expected: 'buzz'},
            {a: 3, expected: 'fizz'},
            {a: 1, expected: 1}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            answer.should.equal(input.expected);
        });
    });
    it('should not work for non-numeric inputs', function() {
        const edgeCases = ['a', '1'];
        edgeCases.forEach(function(input) {
            (function() {
                fizzBuzzer(input);
            }).should.throw(Error);
        });
    });
});