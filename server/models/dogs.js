const db = require("./db");
const Sequelize = require("sequelize");

const Dog = db.define("dog", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  furColor: Sequelize.STRING,
  breed: Sequelize.STRING,
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
});

// Dog.create({
//     name: "Sparky",
//     furColor: "Brown",
//     breed: "Lab",
//     age: 3
//   });

module.exports = Dog;
