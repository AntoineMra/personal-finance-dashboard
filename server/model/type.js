const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')

const Type = database.seq.define(
  'Type',
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
  },
  {
    timestamps: false,
  }
)

module.exports = Type
