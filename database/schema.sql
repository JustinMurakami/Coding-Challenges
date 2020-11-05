DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE users (
  ID int AUTO_INCREMENT,
  userName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  region varchar(255) NOT NULL,
  userType varchar(255) NOT NULL,
  aboutMe varchar(20000) NOT NULL,
  profilePicture varchar(255) NOT NULL,
  onlineStatus varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE friendships (
  ID int AUTO_INCREMENT,
  userId int NOT NULL,
  friendId int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE teams (
  ID int AUTO_INCREMENT,
  teamName varchar(255) NOT NULL,
  leaderId int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE teamMembers (
  ID int AUTO_INCREMENT,
  teamId int NOT NULL,
  teamMemberId int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE invites (
  ID int AUTO_INCREMENT,
  senderId int NOT NULL,
  requestedId int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE games (
  ID int AUTO_INCREMENT,
  gameName varchar(255) NOT NULL,
  coverImage varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  description varchar (20000) NOT NULL,
  website varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE userGames (
  ID int AUTO_INCREMENT,
  userId int NOT NULL,
  gameId int NOT NULL,
  PRIMARY KEY (ID)
);