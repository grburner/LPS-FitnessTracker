const router = require('express').Router();
const workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
  res.send('<h1>letsgo</h1>');
  // workout.find()
  // .then(data => {
  //   res.json(data);
  // });
});

// router.put('/api/workouts/:id', (req, res) => {

// });

router.post('/api/workouts', (req, res) => {
  workout.create({})
    .then(data => {
      res.json(data);
    });
});

// router.get('/api/workouts/range', (req, res) => {

// });

module.exports = router;