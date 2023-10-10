const express = require('express');
const router = express.Router();
const apiMovies = require('../../controllers/api/moviesController.api');

router.get('/', apiMovies.list)

module.exports = router;

