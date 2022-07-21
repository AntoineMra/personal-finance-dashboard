const Expense = require('../controller/controllerExpense')

module.exports = (app) => {
  let router = require('express').Router()
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

  router.get('/expenses', Expense.findAllExpenses)

  /**
   * @swagger
   * /expense/{id}:
   *    get:
   *      description: Returns a expense
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the expense to get
   *      responses:
   *        '200':
   *          description: Successfully returned a expense
   *        '500':
   *          description: Failed to query for a expense
   */

  router.get('/expense/:id', Expense.findExpense)

  app.use('/api', router)
}
