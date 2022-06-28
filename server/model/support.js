const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')
const Category = require('./category')

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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  }
)

module.exports = Support
