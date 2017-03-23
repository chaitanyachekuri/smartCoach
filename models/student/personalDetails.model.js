const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentPersonalDetailsSchema = new Schema({
    guId: String,
    controlId: String,
    email: String,
    password: String,
    userName: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    type: String
});

const studentPersonalDetails = mongoose.model('studentPersonalDetails', studentPersonalDetailsSchema);

module.exports = studentPersonalDetails;