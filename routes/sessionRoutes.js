const express = require('express');
const { scheduleSession, fetchMentorSessions } = require('../controllers/sessionController');
const router = express.Router();

router.post('/schedule', scheduleSession);
router.get('/mentor/:mentor_id/sessions', fetchMentorSessions);

module.exports = router;