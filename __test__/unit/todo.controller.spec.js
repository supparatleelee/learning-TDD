const httpMocks = require('node-mocks-http');
const { createTodo } = require('../../src/controller/todo.controller');
const { Todo } = require('../../src/model');
const todo = require('../mocks/todo.json');

let req, res, next;
beforeAll(() => {
  // Arrange Global
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  Todo.create = jest.fn(); // STUB -> SPY -> MOCK
  next = jest.fn();
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

  it('should return status 201 when response', () => {
    req.body = todo;

    // Act
    createTodo(req, res);

    // Assert
    expect(res.statusCode).toBe(201);
  });

  it('should end call', () => {
    req.body = todo;
    createTodo(req, res);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it('should return json in correct format when created success', async () => {
    req.body = { ...todo };
    Todo.create.mockReturnValue({ ...todo });
    // let formatedResponse = {
    //   message: 'created todo',
    //   todo: { ...todo },
    // };

    await createTodo(req, res);

    expect(res._getJSONData()).toEqual({ ...todo });
  });

  it('should handle error', async () => {
    // Arrange - Set expectation
    // const result = Todo.create.mockImplementation(() => true);

    // expect(result()).toBe(true);

    // set expectation
    Todo.create.mockImplementation(() => Promise.reject({ message: 'cannot create' }));
    // Arrange
    req.body = todo;

    await createTodo(req, res, next);

    expect(next).toBeCalledWith({ message: 'cannot create' });
  });
});
