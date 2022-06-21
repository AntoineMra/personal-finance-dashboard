import db from 'database'
const { Sequelize, DataTypes } = require('sequelize')
import Support from 'support'

const Invest = db.define(
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
      allowNull: false,
    },
    supportId: {
      type: DataTypes.INTEGER,

      references: {
        model: Support,
        key: 'uuid',
      },
    },
  },
  {
    // Other model options go here
  }
)

module.exports = Invest
