const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Type = require('../model/type')

exports.findAllTypes = (req, res) => {
  Type.findAll().then((data) => {
    res.send(data)
  })
}
