# String Calculator (TDD Kata 1)

This project implements a **String Calculator** based on the [TDD Kata 1](https://osherove.com/tdd-kata-1) using **Test-Driven Development (TDD)** in **Node.js** with **Jest** for unit testing.

---

## 🚀 Features
- Returns `0` for an empty string
- Handles single and multiple numbers
- Supports `,` (comma) and `\n` (newline) as delimiters
- Allows custom delimiters (e.g., `//[delimiter]\n`)
- Supports multi-character and multiple delimiters
- Throws an error for negative numbers (listing all negatives)
- Ignores numbers greater than `1000`
- Tracks the number of times `add()` is called

---

## 📦 Installation

1. **Clone the repository**
```sh
git clone https://github.com/Sushan-arch/string-calculator
cd string-calculator
```

2. **Install dependencies**
```sh
npm install
```

---

## 🧪 Running Tests

Run all test cases with Jest:
```sh
npm test
```

---

## 📜 Usage Example

```javascript
const StringCalculator = require('./stringCalculator');
const calculator = new StringCalculator();

console.log(calculator.add("1,2,3")); // Output: 6
console.log(calculator.add("//;\n1;2")); // Output: 3
console.log(calculator.add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.getCalledCount()); // Output: 3
```

---

## 🛠 Docker Support

### Build and Run Tests in Docker
```sh
docker build -t string-calculator .
docker run --rm string-calculator
```

---

## 📝 TDD Test Cases Implemented
| Feature | Status |
|---------|--------|
| Empty string returns `0` | ✅ Implemented |
| Single number returns itself | ✅ Implemented |
| Sum of two numbers | ✅ Implemented |
| Handle multiple numbers | ✅ Implemented |
| Handle new lines as delimiters | ✅ Implemented |
| Support custom delimiters | ✅ Implemented |
| Throw exception for negative numbers | ✅ Implemented |
| Show all negatives in exception | ✅ Implemented |
| Ignore numbers >1000 | ✅ Implemented |
| Support multiple custom delimiters | ✅ Implemented |
| Support multi-character delimiters | ✅ Implemented |
| Track number of times `add()` is called | ✅ Implemented |

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 📬 Contact
For any questions or issues, reach out via **[GitHub Issues](https://github.com/your-username/string-calculator/issues)**.

---

Happy Coding! 🚀

