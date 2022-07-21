const Category = require('../controller/controllerCategory')

module.exports = (app) => {
  let router = require('express').Router()
  /**
   * @swagger
   * /categories:
   *    get:
   *      description: Returns all categories
   *      responses:
   *        '200':
   *          description: Successfully returned all categories
   *        '500':
   *          description: Failed to query for categories
   */

  router.get('/categories', Category.findAllCategories)

  /**
   * @swagger
   * /category/{id}:
   *    get:
   *      description: Returns a category
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the category to get
   *      responses:
   *        '200':
   *          description: Successfully returned a category
   *        '500':
   *          description: Failed to query for a category
   */
  router.get('/category/:id', Category.findCategory)

  /**
   * @swagger
   * /category:
   *    post:
   *      description: Add a category
   *      responses:
   *        '200':
   *          description: Successfully add a category
   *        '500':
   *          description: Failed to add a category
   */
  router.post('/category', Category.addCategory)

  /**
   * @swagger
   * /category/{id}:
   *    put:
   *      description: Update a category
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the category to get
   *      responses:
   *        '200':
   *          description: Successfully update a category
   *        '500':
   *          description: Failed to update for a category
   */
  router.put('/category/:id', Category.updateCategory)

  /**
   * @swagger
   * /category/{id}:
   *    delete:
   *      description: Delete a category
   *      parameters:
   *        name: id
   *        schema:
   *          type: integer
   *        required: true
   *        description: Numeric ID of the category to get
   *      responses:
   *        '200':
   *          description: Successfully delete a category
   *        '500':
   *          description: Failed to delete for a category
   */
  router.delete('/category/:id', Category.deleteCategory)

  app.use('/api', router)
}
