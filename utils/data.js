const { Types } = require("mongoose");
const { User } = require("../models");

const usernameSeedData = ["Aaran", "Aaren"];

const reactionSeedData = ["That is a cool thought", "I agree"];

const emailSeedData = ["RandomEmail1@naver.com", "coolEmail@gmail.com"];

const thoughtSeedData = [
  "This is just random thought guys",
  "This is just random thought ladies",
];

const friendSeedData = ["Aaran", "Aaren"];

const seedUsername = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: usernameSeedData[i],
    });
  }
  return results;
};

const seedEmail = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      email: emailSeedData[i],
    });
  }
  return results;
};

const seedThoughtText = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: thoughtSeedData[i],
      createdAt: Date.now(),
      username: usernameSeedData[i],
    });
  }
  return results;
};

const seedCreatedDate = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      createdAt: dateSeedDate[i],
    });
  }
  return results;
};

// Function to generate random reactions that we can add to thought object.

const seedReactions = (int) => {
  const results = [];
  for (let i = 1; i < int; i++) {
    results.push({
      reactionId: new Types.ObjectId(),
      reactionBody: reactionSeedData[i],
      username: usernameSeedData[i],
    });
  }
  return results;
};

const seedFriend = (int) => {
  const results = [];
  for (let i = 2; i < int; i++) {
    results.push({
      friends: User.Types.ObjectId(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  seedUsername,
  seedThoughtText,
  seedEmail,
  seedReactions,
  seedFriend,
  seedCreatedDate,
};
