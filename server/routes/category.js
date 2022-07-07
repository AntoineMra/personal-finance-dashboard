const Category = require('../controller/controllerCategory')

/**
 * @swagger
 * /categories:
 *    get:
 *      description: Returns all categories
 *      responses:
 *        '200':
 *          description: Successfully returned all categories
 *        '500':
 *          description: Failed to query for categories
 */

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/categories', Category.findAllCategories)
  app.use('/api', router)
}
