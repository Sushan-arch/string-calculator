class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf("\n");
            const delimiter = numbers.slice(2, delimiterLineEnd);
            numbers = numbers.slice(delimiterLineEnd + 1);
            return numbers.split(new RegExp(`\\${delimiter}`)).map(Number).reduce((sum, num) => sum + num, 0);
        }

        return numbers.split(/,|\n/).map(Number).reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;