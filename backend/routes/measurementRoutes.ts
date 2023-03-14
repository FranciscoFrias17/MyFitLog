import { Router } from 'express'
import {
    getMeasurement,
    setMeasurement,
    updateMeasurement,
    deleteMeasurement,
} from '../controller/measurementController'

const router = Router()

router.route('/').get(getMeasurement).post(setMeasurement)

router.route('/:id').put(updateMeasurement).delete(deleteMeasurement)

export default router
