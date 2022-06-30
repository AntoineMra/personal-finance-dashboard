const Category = require('../controller/controllerCategory')

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/categories', Category.findAllCategories)
  app.use('/api', router)
}
