// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { createOrUpdateProfile, getProfile, calculateAge } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// POST create/update profile
router.post('/', authMiddleware, createOrUpdateProfile);

// GET current user's profile
router.get('/', authMiddleware, getProfile);

// POST calculate age from DOB
router.post('/calculate-age', authMiddleware, calculateAge);

module.exports = router;
