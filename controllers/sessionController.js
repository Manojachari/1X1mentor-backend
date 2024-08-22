const { createSession } = require('../models/sessionModel');
const { getMentorSessions } = require('../models/sessionModel');

const scheduleSession = async (req, res) => {
  const { mentor_id, student_id, time_slot, duration, payment_amount } = req.body;
  try {
    const sessionId = await createSession(mentor_id, student_id, time_slot, duration, payment_amount);
    res.status(201).json({ sessionId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to schedule session' });
  }
};

const fetchMentorSessions = async (req, res) => {
  try {
    const sessions = await getMentorSessions(req.params.mentor_id);
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve sessions' });
  }
};

module.exports = { scheduleSession, fetchMentorSessions };