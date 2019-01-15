const router = require('express').Router();
const { Dog } = require('../models');

router.get('/', async (req, res, next) => { // async/await syntax (ES7);
  let dogs;

  try {
    dogs = await Dog.findAll(); // async/await syntax (ES7);
  }
  catch (err) {
    res.send(err);
  }

  res.status(200).json(dogs);
});

router.get('/:dogId', (req, res, next) => {
  Dog.findByPk(req.params.dogId) // You might see findById() in other codebases;
    .then(foundDog => res.status(200).json(foundDog)) // .then() syntax (ES6);
    .catch(err => console.log(err));
});

// router.post('/', (req, res, next) =>{});
// router.put('/:dogId', (req, res, next) =>{});
// router.delete('/:dogId', (req, res, next) =>{});

module.exports = router;
