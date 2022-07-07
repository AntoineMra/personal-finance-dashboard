const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Category = require('../model/category')

exports.findAllCategories = (req, res) => {
  Category.findAll().then((data) => {
    res.send(data)
  })
}
