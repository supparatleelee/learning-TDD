const { DataTypes, Model } = require('sequelize');
const db = require('../connection/database');

class Todo extends Model {}

Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    modelName: 'todo',
  }
);

module.exports = Todo;
