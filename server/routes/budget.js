const Budget = require('../controller/controllerBudget')

/**
 * @swagger
 * /budgets:
 *    get:
 *      description: Returns all budgets
 *      responses:
 *        '200':
 *          description: Successfully returned all budgets
 *        '500':
 *          description: Failed to query for budgets
 */

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/budgets', Budget.findAllBudgets)
  app.use('/api', router)
}
