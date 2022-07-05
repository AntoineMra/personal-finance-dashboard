const Support = require('../controller/controllerSupport')

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

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/supports', Support.findAllSupports)
  app.use('/api', router)
}
