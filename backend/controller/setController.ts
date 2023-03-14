import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import Set from '../models/setModel'

// @desc: Get all sets
// @route: GET /api/sets
// @access: Private

export const getSet = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const sets = await Set.find({})
    res.status(200).json(sets)
})

// @desc: Set a set
// @route: POST /api/sets
// @access: Private

export const setSet = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const set = new Set({
        setId: req.body.setId,
        setNumber: req.body.setNumber,
        reps: req.body.reps,
        weight: req.body.weight,
        weightType: req.body.weightType,
    })
    res.status(200).json(set)
})

// @desc: Update a set
// @route: PUT /api/sets/:id
// @access: Private

export const updateSet = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const set = await Set.findById(req.params.id)

    if (!set) {
        res.status(400)
        throw new Error('Set not found')
    }

    const updatedSet = await Set.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedSet)
})

// @desc: Delete a set
// @route: DELETE /api/sets/:id
// @access: Private

export const deleteSet = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const set = await Set.findById(req.params.id)

    if (!set) {
        res.status(400)
        throw new Error('Set not found')
    }

    await set.remove()
    res.status(200).json({ message: 'Set removed' })
})
