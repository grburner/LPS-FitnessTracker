const router = require('express').Router();
const workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
  workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  let params = req.params;
  let body = req.body;
  workout.findByIdAndUpdate(
    params.id,
    {
      $push: { exercises: body }
    },
    {
      new: true,
    }
  )
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

router.post('/api/workouts', (req, res) => {
  workout.create({})
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

router.get('/api/workouts/range', (req, res) => {
  workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router;