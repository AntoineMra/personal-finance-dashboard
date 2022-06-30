const Invest = require('../controller/controllerInvest')

/**
 * @swagger
 * /invests:
 *    get:
 *      description: Returns all investments
 *      responses:
 *        '200':
 *          description: Successfully returned all investments
 *        '500':
 *          description: Failed to query for investments
 */

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/invests', Invest.findAllInvests)
  app.use('/api', router)
}
