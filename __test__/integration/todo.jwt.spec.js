const request = require('supertest');
const { db, Todo } = require('../../src/model');
const app = require('../../src/app');
const todo = require('../mocks/todo.json');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await Todo.destroy({ truncate: true });
});

let endPointUrl = '/api/v1.0/todos';

describe('TODO' + endPointUrl, () => {
  it('POST TODO', async () => {
    // Arrange
    let requestBody = todo;
    // Act
    const response = await request(app).post(endPointUrl).send(requestBody);
    // Assert
    expect(response.status).toBe(201);
  });
});
