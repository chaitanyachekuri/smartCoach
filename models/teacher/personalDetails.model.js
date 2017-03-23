const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherPersonalDetailsSchema = new Schema({
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

const teacherPersonalDetails = mongoose.model('teacherPersonalDetails', teacherPersonalDetailsSchema);

module.exports = teacherPersonalDetails;