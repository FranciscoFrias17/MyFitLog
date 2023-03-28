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
    const { name, email, password } = req.body

    if (!name || !email || !password) {
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
    })

    if (!user) {
        res.status(400)
        throw new Error('Invalid user data')
    }

    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        token: generateToken(user._id),
    })
})

// @desc: Authenticate a user
// @route: POST /api/users/login
// @access: Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })
    if (!user) {
        res.status(401)
        throw new Error('Invalid email or password')
    }

    // Check for password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        res.status(401)
        throw new Error('Invalid email or password')
    }

    res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        token: generateToken(user._id),
    })
})

// @desc: Get user profile
// @route: GET /api/users/me
// @access: Private
export const getMe = asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }

    const { _id, name, email } = user

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT
const generateToken = (id: ObjectId) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
        expiresIn: '30d',
    })
}
