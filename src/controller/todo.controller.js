const TodoService = require('../services/TodoService');

exports.createTodo = async (req, res, next) => {
  try {
    const todo = req.body;
    // const newTodo = await Todo.create(todo);
    const newTodo = await TodoService.createTodo(todo);
    //   res.status(201).json({ message: 'created todo', todo: newTodo });
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
};
