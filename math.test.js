const { add, multiply, divide, minus } = require('./math');

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

test('multiply function', () => {
  let input1 = 3;
  let input2 = 2;
  let result = multiply(input1, input2);
  expect(result).toBe(input1 * input2);
});

test('should return cannot divide string when call divide function with 5, 0 - divide function: unhappy case', () => {
  let input1 = 5;
  let input2 = 0;
  let expectTest = 'Cannot Divide';

  let result = divide(input1, input2);

  expect(result).toBe(expectTest);
});

// in() === test()
// can put set of in()/test() in descibe()

// beforeAll(() => {
// let input1 = 2
// let input2 = 12
// })

// beforeEach(), afterAll(), afterEach()

describe('Minus FN: TDD', () => {
  // write test before coding = Document by examples
  it('should have minus as a function', () => {
    expect(typeof minus).toBe('function');
  });

  it('should return number', () => {
    const result = minus();

    expect(typeof result).toBe('number');
  });

  it('should return number when parameters are string', () => {
    const result = minus('5', '4'); // passed
    // const result = minus('5', 'A'); // failed

    expect(result).toBeTruthy();
  });

  it('should return 1 when providing 5 minus 4 as parameters', () => {
    let a = 5;
    let b = 4;
    const result = minus(a, b);
    expect(result).toBe(a - b);
  });
});
