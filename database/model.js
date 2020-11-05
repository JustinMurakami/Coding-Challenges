const database = require ('.');

const dashboard = {
  getGamesList: (type, callback) => {
    database.query(`SELECT * FROM games WHERE type = '${type}' LIMIT 10;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}

module.exports = dashboard;