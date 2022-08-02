const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    workoutType:{
        type: String
    },
    duration:{
        type: String,
        default: '30'
    },
    date:{
        type: Date,
        default: Date.now
    },
    description:[]
});

const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;