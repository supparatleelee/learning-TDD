const httpMocks = require('node-mocks-http');
const { createTodo } = require('../../src/controller/todo.controller');
const { Todo } = require('../../src/model');

describe('Todo controller : Create todo', () => {
  it('should have todo.controller.createTodo as a function', () => {
    expect(typeof createTodo).toBe('function');
  });

  it('should call TodoModel.create', () => {
    // Arrange
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    // Setup expectation
    Todo.create = jest.fn();

    // Action
    createTodo(req, res);

    // Assert & Verify expectation
    expect(Todo.create).toHaveBeenCalled();
  });
});
