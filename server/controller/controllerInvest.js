const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Invest = require('../model/invest')

exports.findAllInvests = (req, res) => {
  Invest.findAll().then((data) => {
    res.send(data)
  })
}
