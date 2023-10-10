const express = require('express');
const router = express.Router();
const apiMovies = require('../../controllers/api/moviesController.api');

router.get('/', apiMovies.list)
router.get('/:id', apiMovies.detail)
router.post('/', apiMovies.create)
router.delete('/:id', apiMovies.delete)

module.exports = router;

