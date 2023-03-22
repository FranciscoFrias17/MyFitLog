import mongoose, { Schema, model, Types } from 'mongoose'

interface ISession {
    userId: Types.ObjectId
    date: Date
    _id: Types.ObjectId
}

const sessionSchema = new Schema<ISession>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
})

export default model<ISession>('Session', sessionSchema)
