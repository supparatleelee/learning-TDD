const httpMocks = require('node-mocks-http');
const { createTodo } = require('../../src/controller/todo.controller');
const { Todo } = require('../../src/model');
const todo = require('../mocks/todo.json');

let req, res, next;
beforeAll(() => {
  // Arrange Global
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe('Todo controller : Create todo', () => {
  it('should have todo.controller.createTodo as a function', () => {
    expect(typeof createTodo).toBe('function');
  });

  it('should call TodoModel.create', () => {
    // Arrange
    // let req = httpMocks.createRequest();
    // let res = httpMocks.createResponse();
    // Setup expectation
    Todo.create = jest.fn();

    // Action
    createTodo(req, res);

    // Assert & Verify expectation
    expect(Todo.create).toHaveBeenCalled();
  });

  it('should call Todo.create with newTodo', () => {
    // let req = httpMocks.createRequest();
    // let res = httpMocks.createResponse();
    req.body = todo;

    Todo.create = jest.fn();

    createTodo(req, res);

    expect(Todo.create).toHaveBeenCalledWith(todo);
  });

  it('should return status 201 ub response', () => {
    req.body = todo;

    // Act
    createTodo(req, res);

    // Assert
    expect(res.statusCode).toBe(201);
  });
});
