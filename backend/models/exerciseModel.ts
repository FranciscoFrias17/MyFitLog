import mongoose from 'mongoose'

const exerciseSchema = new mongoose.Schema({
    exerciseId: {
        type: String,
        required: true,
        unique: true,
    },
    exerciseName: {
        type: String,
        required: true,
    },
    exerciseDescription: {
        type: String,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    weightType: {
        type: String,
        required: true,
    },
})

export default mongoose.model('Exercise', exerciseSchema)
