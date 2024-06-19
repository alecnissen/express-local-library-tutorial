const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// GET request for list of all Genre.
router.get('/genres', genreController.genre_list);

module.exports = router;
