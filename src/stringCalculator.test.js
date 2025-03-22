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

    test('handles multiple numbers separated by commas', () => {
        expect(calculator.add("1,2,3,4,5")).toBe(15);
    });

    test('handles newline as a delimiter', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test('supports custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('throws an exception for negative numbers', () => {
        expect(() => calculator.add("1,-2")).toThrow("negatives not allowed: -2");
    });

    test('ignores numbers greater than 1000', () => {
        expect(calculator.add("1001,2")).toBe(2);
    });

    test('supports multi-character delimiters', () => {
        expect(calculator.add("//[***]\n1***2***3")).toBe(6);
    });

    test('throws an exception for multiple negative numbers', () => {
        expect(() => calculator.add("1,-2,-3")).toThrow("negatives not allowed: -2, -3");
    });

    test('tracks the number of times add() was called', () => {
        calculator.add("1,2");
        calculator.add("3,4");
        expect(calculator.getCalledCount()).toBe(2);
    });

});