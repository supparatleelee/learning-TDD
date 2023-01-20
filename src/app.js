require('dotenv').config();
const express = require('express');
const { db } = require('./model');
const MODE = process.env.NODE_ENV;
const todoRoute = require('./routes/todoRoute');

const app = express();

app.use(express.json());

// db.sync({ force: true });
db.authenticate().then(() => {
  console.log(`DB Connect in ${MODE} mode`);
});

app.use('/api/v1.0/todos', todoRoute);

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`Server is running at port ${PORT} in ${MODE} mode`));

module.exports = app;
