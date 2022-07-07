const Type = require('../controller/controllerType')

/**
 * @swagger
 * /types:
 *    get:
 *      description: Returns all types
 *      responses:
 *        '200':
 *          description: Successfully returned all types
 *        '500':
 *          description: Failed to query for types
 */

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/types', Type.findAllTypes)
  app.use('/api', router)
}
