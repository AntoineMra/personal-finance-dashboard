const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')
const Budget = require('./budget')
const Category = require('./category')

const Income = database.seq.define(
  'Income',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: false,
  }
)

Category.hasMany(Income)
Income.belongsTo(Category)

module.exports = Income
