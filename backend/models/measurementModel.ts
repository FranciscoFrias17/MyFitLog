import mongoose, { Schema, model, Types } from 'mongoose'

interface IMeasurement {
    weight: number
    height: number
    bmi: number
    date: Date
    _id: mongoose.Types.ObjectId
}

const measurementSchema = new Schema<IMeasurement>(
    {
        weight: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        bmi: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default model<IMeasurement>('Measurement', measurementSchema)
