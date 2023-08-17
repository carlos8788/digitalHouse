const express = require('express')
const router = express.Router()
const controller = require('../controllers/main.controller')

router.get('/', controller.index)

router.get('/menu-detail/:id', controller.menuDetail)

module.exports = router