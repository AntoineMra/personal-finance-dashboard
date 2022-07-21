const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Income = require('../model/income')

exports.findAllIncomes = (req, res) => {
  Income.findAll().then((data) => {
    res.send(data)
  })
}

exports.findIncome = (req, res) => {
  Income.findAll({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}
