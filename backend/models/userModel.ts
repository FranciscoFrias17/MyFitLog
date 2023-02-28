import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
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
            required: [true, 'Please enter your birthdate'],
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('User', userSchema)
