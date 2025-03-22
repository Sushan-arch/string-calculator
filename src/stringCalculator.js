class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /,|\n/; // Default delimiters: comma and newline

        if (numbers.startsWith("//")) {
            const match = numbers.match(/^\/\/(.+)\n/);
            if (match) {
                delimiter = new RegExp(match[1], "g"); // Use the custom delimiter
                numbers = numbers.slice(match[0].length); // Remove delimiter declaration
            }
        }

        return numbers
            .split(delimiter)
            .map(Number)
            .reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;