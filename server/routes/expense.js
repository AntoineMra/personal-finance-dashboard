const Expense = require('../controller/controllerExpense')

/**
 * @swagger
 * /expenses:
 *    get:
 *      description: Returns all expenses
 *      responses:
 *        '200':
 *          description: Successfully returned all expenses
 *        '500':
 *          description: Failed to query for expenses
 */

module.exports = (app) => {
  let router = require('express').Router()

  router.get('/expenses', Expense.findAllExpenses)
  app.use('/api', router)
}
