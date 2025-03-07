// calculator.test.js
const calculator = require("./calculator");

describe("Calculator", () => {
  describe("Addition", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test("adds -1 + 1 to equal 0", () => {
      expect(calculator.add(-1, 1)).toBe(0);
    });

    test("adds decimal numbers", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("Subtraction", () => {
    test("subtracts 2 - 1 to equal 1", () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });

    test("subtracts -1 - 1 to equal -2", () => {
      expect(calculator.subtract(-1, 1)).toBe(-2);
    });
  });

  describe("Multiplication", () => {
    test("multiplies 2 * 3 to equal 6", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies -2 * 3 to equal -6", () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test("multiplies by zero", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe("Division", () => {
    test("divides 6 / 3 to equal 2", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test("divides 5/2 to equal 2.5", () => {
      expect(calculator.divide(5,2)).toBe(2.5);
    });

    test("divides -6 / 3 to equal -2", () => {
      expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test("throws error when dividing by zero", () => {
      expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });
});
