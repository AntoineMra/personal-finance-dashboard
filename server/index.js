// Vars
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Express App
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Swagger Specs
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My SEO Project API',
      version: '1.0.0',
    },
  },
  apis: ['./routes*.js'],
}

const PORT = process.env.API_PORT || 5000

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`)
})

const openapiSpecification = swaggerJsdoc(options)

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification))
