class StringCalculator {
    constructor() {
        this.callCount = 0; // Counter to track method calls
    }

    add(numbers) {
        this.callCount++; // Increment call count on each call
        if (numbers === "") return 0;

        let delimiter = /,|\n/; // Default delimiters: comma and newline
        const negatives = [];

        // Check for custom delimiter
        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf("\n");
            let customDelimiter = numbers.slice(2, delimiterLineEnd);

            // Support multiple custom delimiters of any length
            if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
                const delimiters = customDelimiter.match(/\[([^\[\]]+)\]/g).map(d => d.slice(1, -1));
                delimiter = new RegExp(delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|"), "g");
            } else {
                delimiter = new RegExp(customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), "g");
            }

            numbers = numbers.slice(delimiterLineEnd + 1); // Remove the delimiter definition line
        }

        const numArray = numbers.split(delimiter);
        let sum = 0;

        for (let num of numArray) {
            if (num === "") continue; // Skip empty strings resulting from incorrect format

            const number = Number(num);
            if (number < 0) negatives.push(number);
            if (number <= 1000) sum += number;
        }

        if (negatives.length > 0) throw new Error(`negatives not allowed: ${negatives.join(", ")}`);

        return sum;
    }

    getCalledCount() {
        return this.callCount;
    }
}

module.exports = StringCalculator;