import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import Exercise from '../models/exerciseModel'

// @desc: Get all exercises
// @route: GET /api/exercises
// @access: Private

export const getExercise = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const exercises = await Exercise.find({ user: req.user._id })
    res.status(200).json(exercises)
})

// @desc: Set an exercise
// @route: POST /api/exercises
// @access: Private

export const setExercise = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const exercise = new Exercise({
        exerciseId: req.body.exerciseId,
        exerciseName: req.body.exerciseName,
        exerciseDescription: req.body.exerciseDescription,
        sets: req.body.sets,
        weight: req.body.weight,
        weightType: req.body.weightType,
    })
    res.status(200).json(exercise)
})

// @desc: Update an exercise
// @route: PUT /api/exercises/:id
// @access: Private

export const updateExercise = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const exercise = await Exercise.findById(req.params.id)

    if (!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedExercise)
})

// @desc: Delete an exercise
// @route: DELETE /api/exercises/:id
// @access: Private

export const deleteExercise = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const exercise = await Exercise.findById(req.params.id)

    if (!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    await exercise.remove()
    res.status(200).json({ id: req.params.id })
})
