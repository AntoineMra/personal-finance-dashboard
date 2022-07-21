const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Invest = require('../model/invest')

exports.findAllInvests = (req, res) => {
  Invest.findAll().then((data) => {
    res.send(data)
  })
}

exports.findInvest = (req, res) => {
  Invest.findAll({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}
