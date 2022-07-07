const { Sequelize, DataTypes } = require('sequelize')
const Support = require('./support')
const database = require('../database')

const Invest = database.seq.define(
  'Invest',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    initialAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    currentAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    returnAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    monthlyInvest: {
      type: DataTypes.INTEGER,
    },

    supportId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Support,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  }
)

Support.hasMany(Invest)
Invest.hasOne(Support)

module.exports = Invest
