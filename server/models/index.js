// Register your models;
const Dog = require('./dogs');

// Modify the db;
const db = require('./db');

// Export the modified db to be synced() and have a barrel file to grab models;
module.exports = {
  db,
  Dog
};
