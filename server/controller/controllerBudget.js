const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Budget = require('../model/budget')

exports.findAllBudgets = (req, res) => {
  Budget.findAll().then((data) => {
    res.send(data)
  })
}

exports.findBudget = (req, res) => {
  Budget.findAll({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addBudget = async (req, res) => {
  const budget = new Budget(req.body)
  await budget.save()
  return res.status(201).json({ success: true, data: budget })
}

exports.updateBudget = async (req, res) => {
  const budget = await Budget.findAll({
    where: {
      id: req.params.id,
    },
  })
  console.log(budget)
  budget.set(req.body)
  await budget.save()
  return res.status(201).json({ success: true, data: budget })
}

exports.deleteBudget = async (req, res) => {
  const budget = await Budget.findAll({
    where: {
      id: req.param('id'),
    },
  })
  await budget.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The budget has been deleted' })
}
