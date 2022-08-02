const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')
const Expense = require('./expense')
const Income = require('./income')

const Budget = database.seq.define(
  'Budget',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

Budget.hasMany(Expense)
Expense.belongsTo(Budget)

Budget.hasMany(Income)
Income.belongsTo(Budget)

module.exports = Budget
