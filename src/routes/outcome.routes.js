const express = require('express')
const router = express.Router()
const outcomeController = require('../controllers/outcome.controller')
const Auth = require('../middlewares/authentication')

router.get('/', Auth, outcomeController.list)

router.post('/', Auth, outcomeController.add)

module.exports = router