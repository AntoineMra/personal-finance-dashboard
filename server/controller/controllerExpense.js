const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Expense = require('../model/expense')

exports.findAllExpenses = (req, res) => {
  Expense.findAll().then((data) => {
    res.send(data)
  })
}

exports.findExpense = (req, res) => {
  Expense.findAll({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}
