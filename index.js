function pythagoras(num1, num2) {
  // using Pythagoras theorem to calculate the hypotenuse of a right triangle.
  let hypotenuse;

  if (typeof num1 != "number" || typeof num2 != "number") {
    // Check if both inputs are numbers, and if not, throw a TypeError.
    throw TypeError("PLEASE INSERT NUMBERS");
  }

  // Calculate the squares of num1 and num2
  // a squared
  let power = Math.pow(num1, 2);
  console.log(power);
  // b squared
  let thePower = Math.pow(num2, 2);
  console.log(thePower);

  // Sum of the squares of a and b
  let hypeSquared = power + thePower;
  console.log(hypeSquared);

  // Calculate the square root to get the hypotenuse
  hypotenuse = Math.pow(hypeSquared, 0.5);
  console.log(hypotenuse);

  return hypotenuse;

  // a square plus b square first
  // 3x3 = 9
  // 4x4 = 16
}

module.exports = pythagoras; // Export the function for testing
