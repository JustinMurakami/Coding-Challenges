const database = require ('.');

const dashboard = {
  getGamesList: (type, callback) => {
    const queryString = `SELECT * FROM games WHERE type = '${type}' LIMIT 10;`
    database.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getFriendsList: (userId, callback) => {
    const queryString = `select * from friendships inner join users on friendships.friendId = users.ID where friendships.userId = ${userId} order by userName;`;
    database.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getFriendDetails: (userId, callback) => {
    const queryString = `select * from users where ID = ${userId};`;
    database.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getTeams: (userId, callback) => {
    const queryString = `select * from teamMembers inner join teams on teamMembers.teamId = teams.ID where teamMembers.teamMemberId = ${userId} order by teamName;`;
    database.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getTeamDetails: (teamId, callback) => {
    const queryString = `select * from teamMembers join users on teamMembers.teamMemberId=users.ID join teams on teamMembers.teamId=teams.ID where teams.ID=${teamId} order by users.userName;`;
    database.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getTeamLeaderInfo: (teamId, callback) => {
    const queryString = `select * from teams join users on teams.leaderId=users.ID where teams.ID=${teamId};`;
    database.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}

module.exports = dashboard;