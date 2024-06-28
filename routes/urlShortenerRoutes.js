// routes/urlShortenerRoutes.js
const express = require('express');
const router = express.Router();
const { shortenURL } = require('../controllers/urlShortenerController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/shorten-url', authMiddleware, shortenURL);

module.exports = router;
