const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')

const Support = database.seq.define(
  'Support',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.ENUM('Finance', 'Physique'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Support
