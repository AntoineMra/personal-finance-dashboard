const Income = require('../controller/controllerIncome')

module.exports = (app) => {
  let router = require('express').Router()
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

  router.get('/incomes', Income.findAllIncomes)

  /**
   * @swagger
   * /income/{id}:
   *    get:
   *      description: Returns a income
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the income to get
   *      responses:
   *        '200':
   *          description: Successfully returned a income
   *        '500':
   *          description: Failed to query for a income
   */
  router.get('/income/:id', Income.findIncome)

  app.use('/api', router)
}
