const Category = require('../controller/controllerCategory')

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/categories')
  app.use('/api', router)
}
