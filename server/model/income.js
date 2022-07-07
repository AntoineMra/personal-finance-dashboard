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

    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Category,
        key: 'id',
      },
    },

    budgetId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Budget,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Income
