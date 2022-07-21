const Support = require('../controller/controllerSupport')

module.exports = (app) => {
  let router = require('express').Router()

  /**
   * @swagger
   * /supports:
   *    get:
   *      description: Returns all supports
   *      responses:
   *        '200':
   *          description: Successfully returned all supports
   *        '500':
   *          description: Failed to query for supports
   */

  router.get('/supports', Support.findAllSupports)

  /**
   * @swagger
   * /support/{id}:
   *    get:
   *      description: Returns a support
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the support to get
   *      responses:
   *        '200':
   *          description: Successfully returned a support
   *        '500':
   *          description: Failed to query for a support
   */
  router.get('/support/:id', Support.findSupport)

  app.use('/api', router)
}
