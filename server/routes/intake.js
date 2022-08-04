const router = require('express').Router();
let intake = require('../models/intake.model');
let water = require(`../models/water.model`)

router.route('/').get((req, res) => {
    intake.find({})
        .then(intakes => res.json(intakes))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    console.log("yo")
    const description = req.body.description;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);
    const amount = req.body.amount;
    const hour = Number(req.body.hour);



    const newintake = new intake({
        description,
        calories,
        date,
    });

    const newwater = new water({
        amount,
        hour,
        day: date,
    });
    console.log(newwater)
    newintake.save()
        .then(() => newwater.save())
        .then(() => res.json(`Intake and Water added`))
        .catch(err => res.status(400).json('Error: ' + err))
})



router.route('/:id').get((req, res) => {
    intake.findById(req.params.id)
        .then(intake => res.json(intake))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    intake.findByIdAndDelete(req.params.id)
        .then(() => res.json('intake deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    intake.findById(req.params.id)
        .then(intake => {
            intake.description = req.body.description;
            intake.calories = Number(req.body.calories);
            intake.date = Date.parse(req.body.date);

            intake.save()
                .then(() => res.json('intake updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router;