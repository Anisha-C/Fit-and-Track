const router = require('express').Router();
const {
    getAllWorkout,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../../controllers/workout-controller');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllWorkout)
  .post(createWorkout);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getWorkoutById)
  .put(updateWorkout)
  .delete(deleteWorkout);

module.exports = router;