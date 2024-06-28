// controllers/profileController.js
const Profile = require('../models/Profile');

// Create or update profile details
exports.createOrUpdateProfile = async (req, res, next) => {
  const { firstName, lastName, dob } = req.body;
  const profileFields = { firstName, lastName, dob };

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    // Create new profile if not exists
    profile = new Profile({
      user: req.user.id,
      ...profileFields,
    });

    await profile.save();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

// Fetch profile details
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

// Calculate age from date of birth
exports.calculateAge = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' });
    }
    const dob = profile.dob;
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    res.json({ age });
  } catch (err) {
    next(err);
  }
};
