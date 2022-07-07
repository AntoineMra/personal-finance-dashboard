const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Budget = require('../model/budget')

exports.findAllBudgets = (req, res) => {
  Budget.findAll().then((data) => {
    res.send(data)
  })
}
