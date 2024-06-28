// controllers/utilsController.js
exports.calculateAge = (req, res) => {
    const { dob } = req.body;
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
      age--;
    }
    res.json({ age });
  };
  