const Invest = require('../controller/controllerInvest')

module.exports = (app) => {
  let router = require('express').Router()
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
  router.get('/invests', Invest.findAllInvests)

  /**
   * @swagger
   * /invest/{id}:
   *    get:
   *      description: Returns a invest
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the invest to get
   *      responses:
   *        '200':
   *          description: Successfully returned a invest
   *        '500':
   *          description: Failed to query for a invest
   */
  router.get('/invest/:id', Invest.findInvest)

  app.use('/api', router)
}
