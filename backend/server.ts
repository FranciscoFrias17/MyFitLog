import express, { Application } from 'express'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorMiddleware'
import { connectDB } from './db/index.js'
import exerciseRoutes from './routes/exerciseRoutes'

dotenv.config()
const port = process.env.PORT

connectDB()

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/exercises', exerciseRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

export default app
