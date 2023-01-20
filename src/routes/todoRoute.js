const express = require('express');
const router = express.Router();

const TodoController = require('../controller/todo.controller');

router.post('/', TodoController.createTodo);

module.exports = router;
