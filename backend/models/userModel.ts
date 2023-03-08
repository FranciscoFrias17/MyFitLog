import mongoose, { Schema, model, Types } from 'mongoose'

interface IUser {
    name: string
    email: string
    password: string
    birthdate: Date
    _id: mongoose.Types.ObjectId
}

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name'],
        },
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password'],
        },
        birthdate: {
            type: Date,
            required: [false, 'Please enter your birthdate'],
        },
    },
    {
        timestamps: true,
    }
)

export default model<IUser>('User', userSchema)
