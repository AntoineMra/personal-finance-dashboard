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
