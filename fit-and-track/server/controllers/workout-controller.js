const { Workout } = require('../models');

const workoutController = {
    getAllWorkout(req, res){
        Workout.find({})
            .then(dbWorkoutData => res.json(dbWorkoutData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
        })
    },
    getWorkoutById({ params }, res){
        Workout.findOne({_id: params.id})
            .then(dbWorkoutData => {
                if(!dbWorkoutData){
                    res.status(404).json({message: 'No workout found with this is!'});
                    return;
                }
                res.json(dbWorkoutData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    createWorkout({body}, res){
        Workout.create(body)
            .then(dbWorkoutData => res.json(dbWorkoutData))
            .catch(err => res.status(400).json(err));
    },
    updateWorkout({params, body}, res){
        Workout.findOneAndUpdate({_id: params.id}, body, { new:true })
            .then(dbWorkoutData =>{
                if(!dbWorkoutData){
                    res.status(404).json({message: 'No workout found with this id!'});
                    return;
                }
                res.json(dbWorkoutData);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteWorkout({params}, res){
        Workout.findOneAndDelete({_id: params.id})
            .then(dbWorkoutData =>{
                if(!dbWorkoutData){
                    res.status(400).json({message: 'No workout found with this id!'});
                    return;
                }
                res.json(dbWorkoutData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = workoutController;