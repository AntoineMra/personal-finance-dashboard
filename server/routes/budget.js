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

  /**
   * @swagger
   * /budget:
   *    post:
   *      description: Add a budget
   *      responses:
   *        '200':
   *          description: Successfully add a budget
   *        '500':
   *          description: Failed to add a budget
   */
  router.post('/budget', Budget.addBudget)

  /**
   * @swagger
   * /budget/{id}:
   *    put:
   *      description: Update a budget
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the budget to get
   *      responses:
   *        '200':
   *          description: Successfully update a budget
   *        '500':
   *          description: Failed to update for a budget
   */
  router.put('/budget/:id', Budget.updateBudget)

  /**
   * @swagger
   * /budget/{id}:
   *    delete:
   *      description: Delete a budget
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the budget to get
   *      responses:
   *        '200':
   *          description: Successfully delete a budget
   *        '500':
   *          description: Failed to delete for a budget
   */
  router.delete('/budget/:id', Budget.deleteBudget)

  app.use('/api', router)
}
