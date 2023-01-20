const { add } = require('./math');

test('the add function should return 4 when providing input 2, 2', () => {
  //   const result = add(2, 2);
  //   expect(result).toBe(4);

  // AAA Pattern
  // Arrange: Prepare the data for testing
  let input1 = 2;
  let input2 = 5;
  // Action: Testing (Exercise)
  let result = add(input1, input2);
  // Assert: Confirm the result
  expect(result).toBe(7);
});

// npm i -g jest-cli
// command: jest
// command: jest --watchAll || "test": "jest --watchAll"
