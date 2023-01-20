const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b == 0) {
    return 'Cannot Divide';
  }

  return a / b;
};

module.exports = { add, multiply, divide };
