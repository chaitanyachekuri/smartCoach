'use strict';

const adminPersonalDetails = require('../../models/admin/personalDetails.model.js');


const express = require('express');
const router = express.Router();
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

  let generateCID = function () {
      let f = Math.floor(Math.random()*89999+10000);
      let c = f.toString();
      c = "A"+c;

    return c;

  }

  app.post('/api/admin/signup', (req, res)=>{

    console.log(req.body);

    let newadminPersonalDetails = adminPersonalDetails({
        guId: generateUUID(),
        controlId:generateCID(),
        email: req.body.adminPersonalDetails.email,
        password: req.body.adminPersonalDetails.password,
        userName: req.body.adminPersonalDetails.userName,
        firstName: req.body.adminPersonalDetails.firstName,
        lastName: req.body.adminPersonalDetails.lastName,
        phoneNumber: req.body.adminPersonalDetails.phone
    });

      newadminPersonalDetails.save(function(err){
        if(err) throw err;
        else{
          console.log("success");
        }
      })

  });


};