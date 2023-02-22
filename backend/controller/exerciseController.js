import asyncHandler from 'express-async-handler'

// @desc: Get all exercises
// @route: GET /api/exercises
// @access: Private

export const getExercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get exercise' })
})

// @desc: Set an exercise
// @route: POST /api/exercises
// @access: Private

export const setExercise = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set exercise' })
})

// @desc: Update an exercise
// @route: PUT /api/exercises/:id
// @access: Private

export const updateExercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update exercise ${req.params.id}` })
})

// @desc: Delete an exercise
// @route: DELETE /api/exercises/:id
// @access: Private

export const deleteExercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete exercise ${req.params.id}` })
})
