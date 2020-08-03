import express from 'express'
import Exercise from '../models/user.model'

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

export default router