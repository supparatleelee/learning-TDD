const { Todo } = require('../model');

exports.createTodo = (req, res) => {
  const todo = req.body;
  Todo.create(todo);
};
