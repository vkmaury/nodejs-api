// app.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/utils', require('./routes/utilsRoutes'));
app.use('/api/url-shortener', require('./routes/urlShortenerRoutes'));

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
