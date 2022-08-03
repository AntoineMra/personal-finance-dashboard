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

  /**
   * @swagger
   * /income:
   *    post:
   *      description: Add a income
   *      responses:
   *        '200':
   *          description: Successfully add a income
   *        '500':
   *          description: Failed to add a income
   */
  router.post('/income', Income.addIncome)

  /**
   * @swagger
   * /income/{id}:
   *    put:
   *      description: Update a income
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the income to get
   *      responses:
   *        '200':
   *          description: Successfully update a income
   *        '500':
   *          description: Failed to update for a income
   */
  router.put('/income/:id', Income.updateIncome)

  /**
   * @swagger
   * /income/{id}:
   *    delete:
   *      description: Delete a income
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the income to get
   *      responses:
   *        '200':
   *          description: Successfully delete a income
   *        '500':
   *          description: Failed to delete for a income
   */
  router.delete('/income/:id', Income.deleteIncome)

  app.use('/api', router)
}
