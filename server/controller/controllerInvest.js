const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Invest = require('../model/invest')

;(async () => {
  await seq.sync({ force: true })
})()

exports.findAllClient = (req, res) => {
  Invest.findAll().then((data) => {
    res.send(data)
  })
}
