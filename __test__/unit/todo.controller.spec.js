const { createTodo } = require('../../src/controller/todo.controller');

describe('Todo controller : Create todo', () => {
  it('should have todo.controller.createTodo as a function', () => {
    expect(typeof createTodo).toBe('function');
  });
});
