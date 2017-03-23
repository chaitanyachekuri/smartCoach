'use strict';

const teacherPersonalDetails = require('../../models/teacher/personalDetails.model');
const studentPersonalDetails = require('../../models/student/personalDetails.model');


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}));

    //should go to helpers
    let generateUUID = function(){
        let d = new Date().getTime();

        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;

    };

    let generateCID = function (a) {
        let f = Math.floor(Math.random()*89999+10000);
        let c = f.toString();
        c = a+c;

        return c;

    }
// till here
    app.post('/api/signup', (req, res)=>{

        console.log(req.body);
        if(req.body.personalDetails.type == 'Teacher') {
            console.log(req.body);
            let newteacherPersonalDetails = teacherPersonalDetails({
                guId: generateUUID(),
                controlId: generateCID("T"),
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
        }
        else if(req.body.personalDetails.type == 'Student'){
            console.log(req.body.personalDetails.type);
            let newstudentPersonalDetails = studentPersonalDetails({
                guId: generateUUID(),
                controlId: generateCID("S"),
                email: req.body.personalDetails.email,
                password: req.body.personalDetails.password,
                userName: req.body.personalDetails.userName,
                firstName: req.body.personalDetails.firstName,
                lastName: req.body.personalDetails.lastName,
                phoneNumber: req.body.personalDetails.phone,
                type: req.body.personalDetails.type
            });

            newstudentPersonalDetails.save(function (err) {
                if (err) throw err;
                else {
                    console.log("success");
                }
            });
        }

    });
};

