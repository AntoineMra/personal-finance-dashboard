const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')
const Budget = require('./budget')
const Category = require('./category')

const Expense = database.seq.define(
  'Expense',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

Category.hasMany(Expense)
Expense.hasOne(Category)

module.exports = Expense
