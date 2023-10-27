# 🔺 Pythagorean Hypotenuse Calculator

## About

👋 Welcome to the `Pythagorean Hypotenuse Calculator` project! This simple `JavaScript` application allows you to calculate the hypotenuse of a right triangle using the Pythagorean theorem.

This project serves as a practical example of how to implement a mathematical concept in `JavaScript`. By using `JavaScript`, we can perform quick and accurate calculations for right triangles, making it a useful resource for various applications.

### Key Features

- ✨ Calculate the hypotenuse of a right triangle.
- 🔢 Validate user inputs to ensure they are numbers.
- ✅ Perform Jest testing to ensure the accuracy of the calculations.

## 🚀 Table of Contents

- [Usage](#usage)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Running Tests](#running-tests)
- [How it Works](#how-it-works)

## Usage

### Installation

Before using the Pythagorean Hypotenuse Calculator, make sure you have Node.js installed on your system. If not, you can download it from [the official website](https://nodejs.org/).

👇 To get started, clone the repository to your local machine:

```bash
git clone https://github.com/PJSalter/Pythagorean-Hypotenuse-Calculator.git
cd Pythagorean-Hypotenuse-Calculator
```

🚀 Next, install the project dependencies:

```
npm install

```

### Running Locally

📊 You can calculate the hypotenuse of a right triangle using the pythagoras function. Here's how to use it:

### Running Locally

👉 To calculate the hypotenuse of a right triangle using the `pythagoras` function, follow these steps in your own project:

1. Import the `pythagoras` function from your `index.js`:

   ```javascript
   const pythagoras = require("./index");
   ```

2. 📏 Define the lengths of the two shorter sides of the right triangle:

```javaScript
const side1 = 3;
const side2 = 4;

```

3. 🧮 Use a try...catch block to handle potential errors and calculate the hypotenuse:

```javaScript
try {
  const hypotenuse = pythagoras(side1, side2);
  console.log(`The hypotenuse of the right triangle is: ${hypotenuse}`);
} catch (error) {
  console.error(error.message);
}

```

### 🧪 Running Tests

We use Jest for testing the Pythagorean Hypotenuse Calculator. To run the tests, use the following command:

```
npm test
```

This command will execute the test cases defined in the test.js file and provide you with the test results.

## How it Works

The `pythagoras` function in `index.js` calculates the hypotenuse of a right triangle using the Pythagorean theorem. It takes two numeric inputs (the lengths of the two shorter sides) and returns the length of the hypotenuse.

For a detailed explanation of the code, refer to the comments in the `index.js` file.
