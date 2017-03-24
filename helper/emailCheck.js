/**
 * Created by kchekuri on 3/24/2017.
 */
"use strict";

const mongoose = require("mongoose");
const teacherPersonalDetails = mongoose.model('teacherPersonalDetails').Schema;
const studentPersonalDetails = mongoose.model('studentPersonalDetails').Schema;

let EmailTeacher = mongoose.model('teacherPersonalDetails', teacherPersonalDetails);
let EmailStudent = mongoose.model('studentPersonalDetails', studentPersonalDetails);


let checkEmail = function(details){
if(details != null && details != undefined) {
 try {
     if (details.personalDetails.type == 'Teacher') {

         EmailTeacher.findOne({'email': details.personalDetails.email.toLowerCase()}, function (err, person) {

             if(!err){
                 if(person){
                     console.log(person)
                     return true;
                 }
                 else{
                     return false;
                 }
             }
         })

     }
     else if(details.personalDetails.type == 'Student'){
         EmailStudent.findOne({'email': details.personalDetails.email.toLowerCase()}, function (err, person) {

             if(!err){
                 if(person){
                     console.log(person)
                     return true;
                 }
                 else{
                     return false;
                 }
             }
         })
     }
 }
 catch (e){
     console.log(e);
 }
}


};

let checkUserName = function(details){


}

module.exports = {
    checkEmail,
    checkUserName
}