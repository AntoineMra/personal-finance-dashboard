const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Support = require('../model/support')

exports.findAllSupports = (req, res) => {
  Support.findAll().then((data) => {
    res.send(data)
  })
}
