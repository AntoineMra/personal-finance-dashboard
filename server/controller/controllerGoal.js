const { DataTypes } = require('sequelize')
const { seq } = require('../database')
const Goal = require('../model/goal')

exports.findAllGoals = (req, res) => {
  Goal.findAll().then((data) => {
    res.send(data)
  })
}

exports.findGoal = (req, res) => {
  Goal.findOne({
    where: {
      id: req.param('id'),
    },
  }).then((data) => {
    res.send(data)
  })
}

exports.addGoal = async (req, res) => {
  const goal = new Goal(req.body)
  await goal.save()
  return res.status(201).json({ success: true, data: goal })
}

exports.updateGoal = async (req, res) => {
  await Goal.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  return res.status(201).json({ success: true })
}

exports.deleteGoal = async (req, res) => {
  const goal = await Goal.findOne({
    where: {
      id: req.param('id'),
    },
  })
  await goal.destroy()
  return res
    .status(201)
    .json({ success: true, data: 'The goal has been deleted' })
}
