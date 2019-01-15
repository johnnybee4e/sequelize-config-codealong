const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/pets");
// const Dog = require("./dogs");

module.exports = db