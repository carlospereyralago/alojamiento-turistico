module.exports = (app) => {
  const router = require('express').Router()
  const controller = require('../controllers/front/accommodation-controller.js')

  router.post('/', controller.create)
  router.get('/', controller.findAll)

  app.use('/api/front/accommodation', router)
}
