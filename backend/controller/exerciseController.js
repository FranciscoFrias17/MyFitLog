// @desc: Get all exercises
// @route: GET /api/exercises

const getExercise = (req, res) => {
    res.status(200).json({message: 'Get exercise'})
}

module.exports = {
    getExercise,
}