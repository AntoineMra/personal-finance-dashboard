const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Expense = require('../model/expense')

exports.findAllExpenses = (req, res) => {
  Expense.findAll().then((data) => {
    res.send(data)
  })
}
