const mongoose = require('mongoose');
const TrainingModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('training', TrainingModel);