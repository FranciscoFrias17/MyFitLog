import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import Measurement from '../models/measurementModel'

// @desc: Get all measurements
// @route: GET /api/measurements
// @access: Private

export const getMeasurement = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const measurements = await Measurement.find({})

    if (!measurements) {
        res.status(400)
        throw new Error('Measurements not found')
    }

    res.status(200).json(measurements)
})

// @desc: Set a measurement
// @route: POST /api/measurements
// @access: Private

export const setMeasurement = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const measurement = new Measurement({
        weight: req.body.weight,
        height: req.body.height,
        bmi: req.body.bmi,
        date: req.body.date,
    })

    res.status(200).json(measurement)
})

// @desc: Update a measurement
// @route: PUT /api/measurements/:id
// @access: Private

export const updateMeasurement = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const measurement = await Measurement.findById(req.params.id)

    if (!measurement) {
        res.status(400)
        throw new Error('Measurement not found')
    }

    const updatedMeasurement = await Measurement.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedMeasurement)
})

// @desc: Delete a measurement
// @route: DELETE /api/measurements/:id
// @access: Private

export const deleteMeasurement = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const measurement = await Measurement.findById(req.params.id)

    if (!measurement) {
        res.status(400)
        throw new Error('Measurement not found')
    }

    await Measurement.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: 'Measurement deleted' })
})
