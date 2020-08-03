import express from 'express'
import Exercise from '../models/exercise.model'

const router = express.Router()

router.route('/').get((req, res) => {
    Exercise.find().then(exercises => res.json(exercises))
    .catch((error) => res.status(400).json('Error: ' + error))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save().then(() => res.json('Exercise added'))
    .catch(error => res.status(400).json('Error: ' + error))
})

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercises => res.json(exercises))
  .catch(err => res.status(400).json('Error ' + error))  
})


router.route('/delete/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('exercise deleted'))
    .catch(err => res.status(400).json('Error ' + error))  
  })


  router.route('/update/:id').put((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercises => {
        exercises.username = req.body.username
        exercises.description = req.body.description
        exercises.duration = Number(req.body.duration)
        exercises.date = Date.parse(req.body.date)

        exercises.save().then(() => res.json('Exercise updated'))
        .catch(error => res.status(400).json('Error: ' + error))

    })
    .catch(err => res.status(400).json('Error ' + error))  
  })



export default router