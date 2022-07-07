const { Sequelize, DataTypes } = require('sequelize')
const database = require('../database')
const Type = require('./type')

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
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Type,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
  }
)

Type.hasMany(Support)
Support.hasOne(Type)

module.exports = Support
