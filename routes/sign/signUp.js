'use strict';

const teacherPersonalDetails = require('../../models/teacher/personalDetails.model');
const studentPersonalDetails = require('../../models/student/personalDetails.model');

const idGenHelper = require('../../helper/idGen');
const emailHelper = require('../../helper/email');
const emailCheck = require('../../helper/emailCheck');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}));

// till here
    app.post('/api/signup', (req, res)=>{
        let mailOptions;
        if(req.body.personalDetails.type == 'Teacher') {
            emailCheck.checkEmail(req.body);
            console.log(req.body);
            let newteacherPersonalDetails = teacherPersonalDetails({
                guId: idGenHelper.generateUUID(),
                controlId: idGenHelper.generateCID("T"),
                email: req.body.personalDetails.email,
                password: req.body.personalDetails.password,
                userName: req.body.personalDetails.userName,
                firstName: req.body.personalDetails.firstName,
                lastName: req.body.personalDetails.lastName,
                phoneNumber: req.body.personalDetails.phone,
                type: req.body.personalDetails.type
            });

            newteacherPersonalDetails.save(function (err) {
                if (err) throw err;
                else {
                    console.log("success");
                }
            });


            mailOptions = {
                from: "csk < smartcoach17@gmail.com >",
                to: newteacherPersonalDetails.email,
                subject: "Verify your email to access your smart coach",
                text: "Email Verification",
                html: "Hi " + newteacherPersonalDetails.firstName + " "+ newteacherPersonalDetails.lastName +",<br/>Please type the following in code in the verification box provided to access the website <br/><br/><b>Code: " + newteacherPersonalDetails.controlId+"</b><br/><br/>Thank You,<br/>SmartCoach."
            }


        }
        else if(req.body.personalDetails.type == 'Student'){
            let newstudentPersonalDetails = studentPersonalDetails({
                guId: idGenHelper.generateUUID(),
                controlId: idGenHelper.generateCID("S"),
                email: req.body.personalDetails.email.toLowerCase(),
                password: req.body.personalDetails.password,
                userName: req.body.personalDetails.userName.toLowerCase(),
                firstName: req.body.personalDetails.firstName,
                lastName: req.body.personalDetails.lastName,
                phoneNumber: req.body.personalDetails.phone,
                type: req.body.personalDetails.type
            });

            mailOptions = {
                from: "csk < smartcoach17@gmail.com >",
                to: newstudentPersonalDetails.email,
                subject: "Verify your email to access your smart coach",
                text: "Email Verification",
                html: "Hi " + newstudentPersonalDetails.firstName + " "+ newstudentPersonalDetails.lastName +",<br/>Please type the following in code in the verification box provided to access the website <br/><br/><b>Code: " + newstudentPersonalDetails.controlId+"</b><br/><br/>Thank You,<br/>SmartCoach."
            }

            newstudentPersonalDetails.save(function (err) {
                if (err) throw err;
                else {
                    console.log("success");
                }
            });
        }

        emailHelper(mailOptions);

    });
};

