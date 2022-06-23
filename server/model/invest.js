const { Sequelize, DataTypes } = require('sequelize')
const Support = require('./support')
const database = require('../database')

exports.Invest = database.seq.define(
  'Invest',
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
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
    monthlyInvest: {
      type: DataTypes.INTEGER,
    },
    supportId: {
      type: DataTypes.INTEGER,

      references: {
        model: Support.Support,
        key: 'uuid',
      },
    },
  },
  {
    // Other model options go here
  }
)
