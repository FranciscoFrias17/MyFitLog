import mongoose, { Schema, model, Types } from 'mongoose'

interface ISession {
    userId: mongoose.Types.ObjectId
    date: Date
    _id: mongoose.Types.ObjectId
}

const sessionSchema = new Schema<ISession>({
    userId: {
        type: Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
})

export default model<ISession>('Session', sessionSchema)
