// controllers/urlShortenerController.js
const shortid = require('shortid');
const ShortURL = require('../models/ShortURL');

exports.shortenURL = async (req, res, next) => {
  const { longURL } = req.body;
  try {
    let shortURL = await ShortURL.findOne({ longURL });
    if (shortURL) {
      res.json(shortURL);
    } else {
      const shortCode = shortid.generate();
      const shortURLData = { longURL, shortURL: shortCode };
      shortURL = new ShortURL(shortURLData);
      await shortURL.save();
      res.json(shortURL);
    }
  } catch (err) {
    next(err);
  }
};
