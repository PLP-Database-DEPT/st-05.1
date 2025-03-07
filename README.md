# Assignment: Practical Calculator Testing with Test Plan and Jest

**🎯 Learning Objectives:**

* Apply test planning to a real-world scenario: testing a calculator application.
* Gain hands-on experience in using Jest for test automation.
* Practice risk-based testing and edge case handling.
* Develop practical skills in test reporting.

---

**📋 What You'll Need:**

* 💻 A computer with internet access.
* 📝 A text editor (e.g., Visual Studio Code, Sublime Text).
* 📚 Basic knowledge of software testing, test plan creation, and Jest.
* Node.js and npm installed.
* `calculator.js` file (provided by the instructor).

---

**📝 Submission Instructions:**

* 📂 **Create and submit the following files with the exact names specified:**
    * `test-plan.md`: For your test plan document.
    * `calculator.test.js`: For your Jest test scripts.
    * `test-report.md`: For your test results and report.

---

**📚 Assignment Questions & Tasks:**

**1. Review the Provided `calculator.js`:**

* The instructor will provide the `calculator.js` file.
* Review the code to understand the implemented functions: `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, and `divide(a, b)`.
* Pay close attention to how the `divide(a, b)` function handles division by zero.

---

**2. Create the Test Plan (`test-plan.md`):**

* **Introduction:** Briefly state the purpose: to test the provided calculator module.
* **Test Objectives:** Verify the basic arithmetic functions in the calculator.
* **Test Scope:**
    * In Scope: Addition, subtraction, multiplication, division (positive, negative, decimals, zero).
    * Out of Scope: UI testing, advanced math functions.
* **Test Strategy:** Unit testing with Jest.
* **Test Cases:**
    * Write at least 3 test cases for each function (add, subtract, multiply, divide).
    * Include:
        * Positive number tests.
        * Negative number tests.
        * Decimal number tests (use `toBeCloseTo`).
        * Division by zero test (`toThrow`).
        * Multiplication by zero test.
* **Risk Analysis:**
    * Identify the risk of division by zero.
    * Identify the risk of incorrect decimal calculations.
* **Test Environment:** Node.js, Jest.
* **Entry/Exit Criteria:**
    * Entry: `calculator.js` provided, Jest installed.
    * Exit: All tests pass.
* **Tools:**
    * From the PDF: Name 2 project management tools, and 2 test automation tools.

---

**3. Write Jest Tests (`calculator.test.js`):**

* Use `describe` blocks to organize your tests.
* Use `test` blocks for individual test cases.
* Use `expect` and appropriate matchers (`toBe`, `toBeCloseTo`, `toThrow`).
* Ensure all test cases from your test plan are implemented.

---

**4. Run Tests and Create Test Report (`test-report.md`):**

* Run `npm test` in your terminal.
* In `test-report.md`, include:
    * Total tests run.
    * Tests passed.
    * Tests failed (if any).
    * Any defects found and how they were resolved.
    * Paste the output of the tests.

---

**Practical Tips:**

* Focus on writing clean and readable test code.
* Use clear and concise test descriptions.
* Pay attention to edge cases.
* Use the PDF as a guide for test management practices.
