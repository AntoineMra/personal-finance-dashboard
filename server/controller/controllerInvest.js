const { DataTypes } = require('sequelize')
const { db } = require('../database')
const Invest = require('../model/invest')

async function are() {
  const investment = await Invest.create({
    uuid: 1,
    initialAmount: 100,
    currentAmount: 500,
  })
  console.log(investment)
  await sequelize.sync({ force: true })
}

exports.findAllClient = (req, res) => {
  Invest.findAll().then((data) => {
    res.send(data)
  })
}
