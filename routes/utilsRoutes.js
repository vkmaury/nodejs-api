// routes/utilsRoutes.js
const express = require('express');
const router = express.Router();
const { calculateAge } = require('../controllers/utilsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/calculate-age', authMiddleware, calculateAge);

module.exports = router;
