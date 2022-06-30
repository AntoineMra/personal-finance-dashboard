module.exports = (app) => {
  const Invest = require('../controller/controllerInvest')
  let router = require('express').Router()

  router.get('/invests', Invest.findAllInvests)
  // router.get('/invest/:id', Invest.findClient)
  app.use('/api', router)
}
