const express = require('express');
const { fetchAvailableMentors } = require('../controllers/mentorController');
const router = express.Router();

router.get('/mentors', fetchAvailableMentors);

module.exports = router;
