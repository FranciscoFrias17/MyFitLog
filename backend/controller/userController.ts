import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel'
import { ObjectId } from 'mongodb'

// @desc: Register a user
// @route: POST /api/users
// @access: Public
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, birthdate } = req.body

    if (!name || !email || !password || !birthdate) {
        res.status(400)
        throw new Error('Please fill in all fields')
    }

    // Check if user already exists
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        birthdate,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc: Authenticate a user
// @route: POST /api/users/login
// @access: Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password')
    }
})

// @desc: Get user profile
// @route: GET /api/users/me
// @access: Private
export const getMe = asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: 'Personal profile' })
})

// Generate JWT
const generateToken = (id: ObjectId) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
        expiresIn: '30d',
    })
}
