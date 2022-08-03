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

  /**
   * @swagger
   * /expense:
   *    post:
   *      description: Add a expense
   *      responses:
   *        '200':
   *          description: Successfully add a expense
   *        '500':
   *          description: Failed to add a expense
   */
  router.post('/expense', Expense.addExpense)

  /**
   * @swagger
   * /expense/{id}:
   *    put:
   *      description: Update a expense
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the expense to get
   *      responses:
   *        '200':
   *          description: Successfully update a expense
   *        '500':
   *          description: Failed to update for a expense
   */
  router.put('/expense/:id', Expense.updateExpense)

  /**
   * @swagger
   * /expense/{id}:
   *    delete:
   *      description: Delete a expense
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the expense to get
   *      responses:
   *        '200':
   *          description: Successfully delete a expense
   *        '500':
   *          description: Failed to delete for a expense
   */
  router.delete('/expense/:id', Expense.deleteExpense)

  app.use('/api', router)
}
