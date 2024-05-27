const { Router } = require('express');
const { getTraining, saveTraining, deleteTraining, editTraining } = require('./TrainingController');
const router = Router();

router.get('/', getTraining);
router.post('/saveTraining', saveTraining);
router.post('/deleteTraining', deleteTraining);
router.post('/editTraining', editTraining);

module.exports = router;