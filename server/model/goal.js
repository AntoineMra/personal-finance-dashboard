const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')
const Invest = require('./invest')

const Goal = database.seq.define(
  'Goal',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    purpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    endingDate: {
      type: DataTypes.DATE,
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

Invest.hasMany(Goal)
Goal.belongsTo(Invest)

module.exports = Goal
