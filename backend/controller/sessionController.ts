import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import Session from '../models/sessionModel'

// @desc: Get all sessions
// @route: GET /api/sessions
// @access: Private

export const getSession = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const sessions = await Session.find({})

    if (!sessions) {
        res.status(400)
        throw new Error('Sessions not found')
    }

    res.status(200).json(sessions)
})

// @desc: Set a session
// @route: POST /api/sessions
// @access: Private

export const setSession = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const session = new Session({
        userId: req.body.userId,
        date: req.body.date,
    })

    res.status(200).json(session)
})

// @desc: Update a session
// @route: PUT /api/sessions/:id
// @access: Private

export const updateSession = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const session = await Session.findById(req.params.id)

    if (!session) {
        res.status(400)
        throw new Error('Session not found')
    }

    const updatedSession = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedSession)
})

// @desc: Delete a session
// @route: DELETE /api/sessions/:id
// @access: Private

export const deleteSession = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const session = await Session.findById(req.params.id)

    if (!session) {
        res.status(400)
        throw new Error('Session not found')
    }

    await session.remove()

    res.status(200).json(session)
})
