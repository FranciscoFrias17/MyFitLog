import { Request, Response } from 'express'

// @desc: Register a user
// @route: POST /api/users
// @access: Public
export const registerUser = (req: Request, res: Response) => {
    res.json({ message: 'Register user' })
}

// @desc: Authenticate a user
// @route: POST /api/users/login
// @access: Public
export const loginUser = (req: Request, res: Response) => {
    res.json({ message: 'Login user' })
}

// @desc: Get user profile
// @route: GET /api/users/me
// @access: Public
export const getMe = (req: Request, res: Response) => {
    res.json({ message: 'Personal profile' })
}
