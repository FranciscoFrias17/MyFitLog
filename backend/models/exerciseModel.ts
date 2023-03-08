import mongoose, { Schema, model, Types } from 'mongoose'

interface IExercise {
    exerciseId: Types.ObjectId
    exerciseName: string
    exerciseDescription: string
    sets: Types.ObjectId
    weight: number
    weightType: string
}

const exerciseSchema = new Schema({
    exerciseId: {
        type: Types.ObjectId,
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
        type: Types.ObjectId,
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

export default model<IExercise>('Exercise', exerciseSchema)
