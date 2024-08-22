const db = require('../database');

const createSession = async (mentorId, timeSlot, duration, paymentAmount) => {
  try {
    const session = await db.run(
      `INSERT INTO sessions (mentor_id, time_slot, duration, payment_amount)
       VALUES (?, ?, ?, ?)`,
      [mentorId, timeSlot, duration, paymentAmount]
    );
    return session;
  } catch (err) {
    console.error("Error inserting session:", err);
    throw err;
  }
};


const getMentorSessions = (mentor_id) => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM sessions WHERE mentor_id = ?`,
      [mentor_id],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
};

module.exports = { createSession, getMentorSessions };