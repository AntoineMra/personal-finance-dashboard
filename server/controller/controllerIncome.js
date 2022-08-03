const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Income = require('../model/income')

exports.findAllIncomes = (req, res) => {
  Income.findAll().then((data) => {
    res.send(data)
  })
}

exports.findIncome = (req, res) => {
  Income.findOne({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addIncome = async (req, res) => {
  const income = new Income(req.body)
  await income.save()
  return res.status(201).json({ success: true, data: income })
}

exports.updateIncome = async (req, res) => {
  await Income.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.status(201).json({ success: true })
}

exports.deleteIncome = async (req, res) => {
  const income = await Income.findOne({
    where: {
      id: req.param('id'),
    },
  })
  await income.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The income has been deleted' })
}
