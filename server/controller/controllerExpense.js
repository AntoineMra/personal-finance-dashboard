const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Expense = require('../model/expense')

exports.findAllExpenses = (req, res) => {
  Expense.findAll().then((data) => {
    res.send(data)
  })
}

exports.findExpense = (req, res) => {
  Expense.findOne({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addExpense = async (req, res) => {
  const expense = new Expense(req.body)
  await expense.save()
  return res.status(201).json({ success: true, data: expense })
}

exports.updateExpense = async (req, res) => {
  await Expense.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.status(201).json({ success: true })
}

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findOne({
    where: {
      id: req.param('id'),
    },
  })
  await expense.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The expense has been deleted' })
}
