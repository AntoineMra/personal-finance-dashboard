const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Support = require('../model/support')

exports.findAllSupports = (req, res) => {
  Support.findAll().then((data) => {
    res.send(data)
  })
}

exports.findSupport = (req, res) => {
  Support.findOne({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addSupport = async (req, res) => {
  const support = new Support(req.body)
  await support.save()
  return res.status(201).json({ success: true, data: support })
}

exports.updateSupport = async (req, res) => {
  await Support.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.status(201).json({ success: true })
}

exports.deleteSupport = async (req, res) => {
  const support = await Support.findOne({
    where: {
      id: req.param('id'),
    },
  })
  await support.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The support has been deleted' })
}
