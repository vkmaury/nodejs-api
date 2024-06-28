// db.js
const mongoose = require('mongoose');
const { mongoURI } = require('./config/config');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove useCreateIndex option
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

