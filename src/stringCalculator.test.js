const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('returns 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('returns the number itself when one number is provided', () => {
        expect(calculator.add("5")).toBe(5);
    });

    test('returns sum of two numbers separated by a comma', () => {
        expect(calculator.add("1,2")).toBe(3);
    });
});