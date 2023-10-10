const express = require('express');
const router = express.Router();
const apiActors = require('../../controllers/api/actorsController.api');

router.get('/', apiActors.list)
router.get('/:id', apiActors.detail)
router.post('/', apiActors.create)
router.delete('/:id', apiActors.delete)

module.exports = router;

