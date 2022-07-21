const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Support = require('../model/support')

exports.findAllSupports = (req, res) => {
  Support.findAll().then((data) => {
    res.send(data)
  })
}

exports.findSupport = (req, res) => {
  Support.findAll({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}
