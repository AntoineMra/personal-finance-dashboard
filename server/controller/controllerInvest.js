const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Invest = require('../model/invest')

;(async () => {
  await seq.sync({ force: true })
  const investment = await Invest.Invest.create({
    uuid: 1,
    initialAmount: 100,
    currentAmount: 500,
  })
})()

exports.findAllClient = (req, res) => {
  Invest.findAll().then((data) => {
    res.send(data)
  })
}
