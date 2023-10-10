const express = require('express');
const router = express.Router();
const apiGenres = require('../../controllers/api/genresController.api');

router.get('/', apiGenres.list)
router.get('/detail/:id', apiGenres.detail)

module.exports = router;