// checking if the type is a number

const pythagoras = require("./index"); // Import the pythagoras function

test("Input validation", () => {
  // Check if it throws a TypeError for non-number inputs
  expect(() => pythagoras("2", "4")).toThrow(TypeError);
  expect(() => pythagoras("2", 4)).toThrow(TypeError);
  expect(() => pythagoras(2, "4")).toThrow(TypeError);
});

test("Hypotenuse calculation", () => {
  // Check the hypotenuse calculation for valid inputs
  expect(pythagoras(3, 4)).toBeCloseTo(5, 5); // Using toBeCloseTo due to floating-point precision
  expect(pythagoras(5, 12)).toBeCloseTo(13, 5);
  expect(pythagoras(8, 15)).toBeCloseTo(17, 5);
});

// expect(pythagoras("2", "4")).toThrow();

// expect(pythagoras(3, 4)).toBe(5);
