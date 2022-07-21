const Budget = require('../controller/controllerBudget')

module.exports = (app) => {
  let router = require('express').Router()

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
  router.get('/budgets', Budget.findAllBudgets)

  /**
   * @swagger
   * /budget/{id}:
   *    get:
   *      description: Returns a budget
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the budget to get
   *      responses:
   *        '200':
   *          description: Successfully returned a budget
   *        '500':
   *          description: Failed to query for a budget
   */
  router.get('/budget/:id', Budget.findBudget)

  app.use('/api', router)
}
