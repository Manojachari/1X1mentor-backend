const { getAvailableMentors } = require('../models/mentorModel');

const fetchAvailableMentors = async (req, res) => {
  try {
    const mentors = await getAvailableMentors(req.query.area_of_interest);
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentors' });
  }
};

module.exports = { fetchAvailableMentors };
