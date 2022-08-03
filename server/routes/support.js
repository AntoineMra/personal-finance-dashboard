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

  /**
   * @swagger
   * /support:
   *    post:
   *      description: Add a support
   *      responses:
   *        '200':
   *          description: Successfully add a support
   *        '500':
   *          description: Failed to add a support
   */
  router.post('/support', Support.addSupport)

  /**
   * @swagger
   * /support/{id}:
   *    put:
   *      description: Update a support
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the support to get
   *      responses:
   *        '200':
   *          description: Successfully update a support
   *        '500':
   *          description: Failed to update for a support
   */
  router.put('/support/:id', Support.updateSupport)

  /**
   * @swagger
   * /support/{id}:
   *    delete:
   *      description: Delete a support
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the support to get
   *      responses:
   *        '200':
   *          description: Successfully delete a support
   *        '500':
   *          description: Failed to delete for a support
   */
  router.delete('/support/:id', Support.deleteSupport)

  app.use('/api', router)
}
