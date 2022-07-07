const Income = require('../controller/controllerIncome')

/**
 * @swagger
 * /incomes:
 *    get:
 *      description: Returns all Incomes
 *      responses:
 *        '200':
 *          description: Successfully returned all Incomes
 *        '500':
 *          description: Failed to query for Incomes
 */

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/incomes', Income.findAllIncomes)
  app.use('/api', router)
}
