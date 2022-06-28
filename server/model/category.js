const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')

const Category = database.seq.define(
  'Category',
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

module.exports = Category
