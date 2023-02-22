import express from 'express'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorMiddleware.js'
import { connectDB } from './db/index.js'
import exerciseRoutes from './routes/exerciseRoutes.js'

dotenv.config()
const port = process.env.PORT

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/exercises', exerciseRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
