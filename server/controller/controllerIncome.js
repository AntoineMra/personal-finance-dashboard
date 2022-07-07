const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Income = require('../model/income')

exports.findAllIncomes = (req, res) => {
  Income.findAll().then((data) => {
    res.send(data)
  })
}
