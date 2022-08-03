const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Category = require('../model/category')

exports.findAllCategories = (req, res) => {
  Category.findAll().then((data) => {
    res.send(data)
  })
}

exports.findCategory = (req, res) => {
  Category.findOne({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addCategory = async (req, res) => {
  const category = new Category(req.body)
  await category.save()
  return res.status(201).json({ success: true, data: category })
}

exports.updateCategory = async (req, res) => {
  await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.status(201).json({ success: true })
}

exports.deleteCategory = async (req, res) => {
  const category = await Category.findOne({
    where: {
      id: req.param('id'),
    },
  })
  await category.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The category has been deleted' })
}
