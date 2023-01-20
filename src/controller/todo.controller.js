const { Todo } = require('../model');

exports.createTodo = () => {
  Todo.create();
};
