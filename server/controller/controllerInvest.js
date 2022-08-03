const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Invest = require('../model/invest')

exports.findAllInvests = (req, res) => {
  Invest.findAll().then((data) => {
    res.send(data)
  })
}

exports.findInvest = (req, res) => {
  Invest.findOne({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addInvest = async (req, res) => {
  const invest = new Invest(req.body)
  await invest.save()
  return res.status(201).json({ success: true, data: invest })
}

exports.updateInvest = async (req, res) => {
  await Invest.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.status(201).json({ success: true })
}

exports.deleteInvest = async (req, res) => {
  const invest = await Invest.findOne({
    where: {
      id: req.param('id'),
    },
  })
  await invest.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The investment has been deleted' })
}
