const { Sequelize } = require('sequelize')

// Database connection
const user = process.env.postgres_USER
const pwd = process.env.postgres_PWD
const pg_uri = process.env.postgres_URI
const db = process.env.postgres_DB
const sequelize = new Sequelize(`postgres://${user}:${pwd}@${pg_uri}/${db}`)

export default sequelize
