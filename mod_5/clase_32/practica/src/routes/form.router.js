const express = require('express')
const router = express.Router()
const formController = require('../controller/form.controller')
const { formValidator, validate } = require('../middleware/validator.mid');

router.get('/', formController.form)

router.post('/', formValidator, validate, formController.form)


module.exports = router