const db = require('../database');

const getAvailableMentors = (area_of_interest) => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM mentors WHERE area_of_interest = ?`,
      [area_of_interest],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });
};

module.exports = { getAvailableMentors };
