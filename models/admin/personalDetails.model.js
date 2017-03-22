const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminPersonalDetailsSchema = new Schema({
    guId: String,
    controlId: String,
    email: String,
    password: String,
    userName: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
});

const adminPersonalDetails = mongoose.model('adminPersonalDetails', adminPersonalDetailsSchema);

module.exports = adminPersonalDetails;