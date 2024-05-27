const TrainingModel = require('./TrainingModel');

//GET
module.exports.getTraining = async (req, res) => {
    const myTraining = await TrainingModel.find();
    res.send(myTraining)
}

//POST
module.exports.saveTraining = async (req, res) => {
    const { title } = req.body;
    TrainingModel.create({ title })
    .then((data) => { console.log('Training added')
    res.send(data)
})
}

//DELETE
module.exports.deleteTraining = async (req, res) => {
    const { _id } = req.body;
    TrainingModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a training'))
}

//EDIT
module.exports.editTraining = async (req, res) => {
    const { _id, title } = req.body;
    TrainingModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Edited a training'))
}