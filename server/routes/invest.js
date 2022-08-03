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

  /**
   * @swagger
   * /invest:
   *    post:
   *      description: Add a invest
   *      responses:
   *        '200':
   *          description: Successfully add a invest
   *        '500':
   *          description: Failed to add a invest
   */
  router.post('/invest', Invest.addInvest)

  /**
   * @swagger
   * /invest/{id}:
   *    put:
   *      description: Update a invest
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the invest to get
   *      responses:
   *        '200':
   *          description: Successfully update a invest
   *        '500':
   *          description: Failed to update for a invest
   */
  router.put('/invest/:id', Invest.updateInvest)

  /**
   * @swagger
   * /invest/{id}:
   *    delete:
   *      description: Delete a invest
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the invest to get
   *      responses:
   *        '200':
   *          description: Successfully delete a invest
   *        '500':
   *          description: Failed to delete for a invest
   */
  router.delete('/invest/:id', Invest.deleteInvest)

  app.use('/api', router)
}
