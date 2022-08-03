const Goal = require('../controller/controllerGoal')

module.exports = (app) => {
  let router = require('express').Router()

  /**
   * @swagger
   * /goals:
   *    get:
   *      description: Returns all goals
   *      responses:
   *        '200':
   *          description: Successfully returned all goals
   *        '500':
   *          description: Failed to query for goals
   */
  router.get('/goals', Goal.findAllGoals)

  /**
   * @swagger
   * /goal/{id}:
   *    get:
   *      description: Returns a goal
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the goal to get
   *      responses:
   *        '200':
   *          description: Successfully returned a goal
   *        '500':
   *          description: Failed to query for a goal
   */
  router.get('/goal/:id', Goal.findGoal)

  /**
   * @swagger
   * /goal:
   *    post:
   *      description: Add a goal
   *      responses:
   *        '200':
   *          description: Successfully add a goal
   *        '500':
   *          description: Failed to add a goal
   */
  router.post('/goal', Goal.addGoal)

  /**
   * @swagger
   * /goal/{id}:
   *    put:
   *      description: Update a goal
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the goal to get
   *      responses:
   *        '200':
   *          description: Successfully update a goal
   *        '500':
   *          description: Failed to update for a goal
   */
  router.put('/goal/:id', Goal.updateGoal)

  /**
   * @swagger
   * /goal/{id}:
   *    delete:
   *      description: Delete a goal
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the goal to get
   *      responses:
   *        '200':
   *          description: Successfully delete a goal
   *        '500':
   *          description: Failed to delete for a goal
   */
  router.delete('/goal/:id', Goal.deleteGoal)

  app.use('/api', router)
}
