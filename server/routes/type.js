const Type = require('../controller/controllerType')

module.exports = (app) => {
  let router = require('express').Router()
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

  router.get('/types', Type.findAllTypes)

  /**
   * @swagger
   * /type/{id}:
   *    get:
   *      description: Returns a type
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the type to get
   *      responses:
   *        '200':
   *          description: Successfully returned a type
   *        '500':
   *          description: Failed to query for a type
   */
  router.get('/type/:id', Type.findType)

  app.use('/api', router)
}
