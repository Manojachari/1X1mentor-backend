const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS mentors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      availability TEXT,
      area_of_interest TEXT
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      area_of_interest TEXT
    )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mentor_id INTEGER,
    time_slot TEXT,
    duration INTEGER,
    payment_amount INTEGER,
    FOREIGN KEY (mentor_id) REFERENCES mentors(id) ON DELETE CASCADE
)

  `);

  db.run(`
    insert into mentors(name, area_of_interest) VALUES ('John Doe', 'Technology')
    `)
    db.run(`
      insert into mentors(name, area_of_interest) VALUES ('Johnson', 'Technology')
      `)
      db.run(`
        insert into mentors(name, area_of_interest) VALUES ('Alice', 'Technology')
        `)
        db.run(`
          insert into mentors(name, area_of_interest) VALUES ('Bob', 'Business')
          `)
          db.run(`
            insert into mentors(name, area_of_interest) VALUES ('John Doe', 'Business')
            `)
            db.run(`
              insert into mentors(name, area_of_interest) VALUES ('Luna', 'Design')
              `)
              db.run(`
                insert into mentors(name, area_of_interest) VALUES ('Manoj', 'Design')
                `)         


});

module.exports = db;
