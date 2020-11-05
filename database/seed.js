const faker = require('faker');
const database = require('./index.js');

const numberOfTestRecords = 100;

const regions = ['Bandle City', 'Bilgewater', 'Demacia', 'Ionia', 'Ixtal', 'Noxus', 'Piltover', 'Shadow Isles', 'Shurima', 'Targon', 'The Freljord', 'The Void', 'Zaun'];

const userTypes = ['beginner', 'casual gamer', 'master'];

const imageUrls = [
  'https://i.imgur.com/otlQznY.jpg',
  'https://i.imgur.com/4JQx5Sr.jpg',
  'https://i.imgur.com/b6XVrXw.jpg',
  'https://i.imgur.com/7jmtqlV.jpg',
  'https://i.imgur.com/jtHNRuT.jpg',
  'https://i.imgur.com/HknGx6i.jpg',
  'https://i.imgur.com/TQDPnP2.jpg',
  'https://i.imgur.com/W9dVKfO.jpg',
  'https://i.imgur.com/lmh83wF.jpg',
  'https://i.imgur.com/Zsy5INv.jpg',
  'https://i.imgur.com/4Pbqvf6.jpg',
  'https://i.imgur.com/xM7CCuM.jpg',
  'https://i.imgur.com/Asdtvf6.jpg',
  'https://i.imgur.com/BiNi2B3.jpg',
  'https://i.imgur.com/sHfLcgF.jpg',
  'https://i.imgur.com/c5sTio1.jpg',
  'https://i.imgur.com/uNDwbg4.jpg',
  'https://i.imgur.com/SZCtbJl.jpg',
  'https://i.imgur.com/ANSijAF.jpg',
  'https://i.imgur.com/R6Ds6vr.jpg',
  'https://i.imgur.com/B45c3tK.jpg',
  'https://i.imgur.com/vshTFIr.jpg',
  'https://i.imgur.com/SXAmVcy.jpg',
  'https://i.imgur.com/5btUScT.jpg',
  'https://i.imgur.com/t97NDBj.jpg',
  'https://i.imgur.com/DclHjFh.jpg',
  'https://i.imgur.com/Atmn7fY.jpg',
  'https://i.imgur.com/IO352bd.jpg',
  'https://i.imgur.com/l46V7O5.jpg',
  'https://i.imgur.com/N6Z460e.jpg',
  'https://i.imgur.com/koBiU6E.jpg',
  'https://i.imgur.com/Rekg5ym.jpg',
  'https://i.imgur.com/AyUQ35p.jpg',
  'https://i.imgur.com/HUgeEZN.jpg',
  'https://i.imgur.com/t1pAQ0Y.jpg',
  'https://i.imgur.com/tuagZ8j.jpg',
  'https://i.imgur.com/uon0iZ7.jpg',
  'https://i.imgur.com/wwLjvBj.jpg',
  'https://i.imgur.com/hJ6KjzO.jpg',
  'https://i.imgur.com/jMt31Vx.jpg',
  'https://i.imgur.com/DGrFYht.jpg',
  'https://i.imgur.com/GwaFnsr.jpg',
  'https://i.imgur.com/yk2JZbM.jpg',
  'https://i.imgur.com/KQVloLJ.jpg',
  'https://i.imgur.com/bzf588c.jpg',
  'https://i.imgur.com/1UUgV9a.jpg',
  'https://i.imgur.com/VRZPyLh.jpg',
  'https://i.imgur.com/b7kavU0.jpg',
  'https://i.imgur.com/jHa8VlI.jpg',
  'https://i.imgur.com/9k4NbTH.jpg'
];

const gameTypes = ['Action', 'Adventure', 'Shooter', 'MMORPG'/*, 'RPG', 'Strategy', 'Puzzle', 'Sports', 'Racing', 'Fighting'*/];

const randomNumber = (number) => {
  return Math.floor(Math.random() * Math.floor(number));
};

const createUser = () => {
  const user = {};
  user.userName = faker.name.firstName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.region = `${regions[randomNumber(regions.length)]}`;
  user.userType = `${userTypes[randomNumber(userTypes.length)]}`;
  user.aboutMe = faker.lorem.sentences();
  user.profilePicture = faker.internet.avatar();
  user.onlineStatus = 'offline';
  return user;
};

const createFriendship = () => {
  const friendship = {};
  friendship.userId = randomNumber(numberOfTestRecords) + 1;
  const friendId = () => {
    const search = (userId) => {
      const testId = randomNumber(numberOfTestRecords) + 1;
      if (testId === userId) {
        return search(userId)
      } else {
        return testId
      }
    }
    return search(friendship.userId);
  }
  friendship.friendId = friendId();
  return friendship;
};

const createGame = () => {
  const game = {};
  game.gameName = faker.lorem.words();
  game.coverImage = imageUrls[randomNumber(imageUrls.length)];
  game.type = gameTypes[randomNumber(gameTypes.length)];
  game.description = faker.lorem.sentences();
  game.website = faker.internet.url();
  return game;
};

const createUserGame = () => {
  const userGame = {};
  userGame.userId = randomNumber(numberOfTestRecords) + 1;
  userGame.gameId = randomNumber(numberOfTestRecords) + 1;
  return userGame;
}

const createUsersForDatabase = () => {
  const users = [];
  for (let i = 0; i < numberOfTestRecords; i++) {
    users.push(createUser());
  }
  return users;
};

const createFriendshipsForDatabase = () => {
  const friendships = [];
  for (let i = 0; i < numberOfTestRecords * 5; i++) {
    friendships.push(createFriendship());
  }
  return friendships.filter((v,i,a) => a.findIndex(t => (t.userId === v.userId && t.friendId===v.friendId)) === i)
}

const createGamesForDatabase = () => {
  const games = [];
  for (let i = 0; i < numberOfTestRecords; i++) {
    games.push(createGame());
  }
  return games;
};

const createUserGamesForDatabase = () => {
  const userGames = [];
  for (let i = 0; i < numberOfTestRecords * 5; i++) {
    userGames.push(createUserGame());
  };
  return userGames.filter((v,i,a) => a.findIndex(t => (t.userId === v.userId && t.gameId===v.gameId)) === i);
};

const insertUsers = () => {
  const users = createUsersForDatabase();
  users.forEach((user) => {
    const { userName, email, password, region, userType, aboutMe, profilePicture, onlineStatus} = user;
    const queryString = `INSERT INTO users (userName, email, password, region, userType, aboutMe, profilePicture, onlineStatus) VALUES ('${userName}', '${email}', '${password}', '${region}', '${userType}', '${aboutMe}', '${profilePicture}', '${onlineStatus}');`;
    database.query(queryString);
  });
};

const insertFriendships = () => {
  const friendships = createFriendshipsForDatabase();
  friendships.forEach((friendship) => {
    const { userId, friendId } = friendship;
    const queryString = `INSERT INTO friendships (userId, friendId) VALUES (${userId}, ${friendId});`;
    database.query(queryString);
  });
};

const insertGames = () => {
  const games = createGamesForDatabase();
  games.forEach((game) => {
    const { gameName, coverImage, type, description, website } = game;
    const queryString = `INSERT INTO games (gameName, coverImage, type, description, website) VALUES ('${gameName}', '${coverImage}', '${type}', '${description}', '${website}');`;
    database.query(queryString);
  });
};

const insertUserGames = () => {
  const userGames = createUserGamesForDatabase();
  userGames.forEach((game) => {
    const { userId, gameId } = game;
    const queryString = `INSERT INTO userGames (userId, gameId) VALUES (${userId}, ${gameId});`;
    database.query(queryString);
  });
};

insertUsers();
insertFriendships();
insertGames();
insertUserGames();