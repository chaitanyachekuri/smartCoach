const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalDetailsSchema = new Schema({
    guId: String,
    controlId: String,
    email: String,
    password: String,
    userName: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
});

const personalDetails = mongoose.model('personalDetails', personalDetailsSchema);

module.exports = personalDetails;