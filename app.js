'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const admin = require('./routes/admin/admin');
const users = require('./routes/users');
const first = require('./routes/first');

const port = 3000;
const uri = "mongodb://smartcoach:Csk16209870@ds137340.mlab.com:37340/smartcoach";

mongoose.connect(uri);
const conn = mongoose.connection;

conn.on('error', (error)=>{

        console.log("error");

});

conn.once('open', ()=>{
   console.log("working");
//should go to email helper
    const mailer = require("nodemailer");

// Use Smtp Protocol to send Email
    let transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cskcvarma13@gmail.com',
            pass: 'SwethaRaju12'
        }
    });

    let mail = {
        from: "csk < cskcvarma13@gmail.com >",
        to: "cskcvarma13@gmail.com",
        subject: "Send Email Using Node.js",
        text: "Node.js New world for me",
        html: "<b>Node.js New world for me</b>"
    }

    transporter.sendMail(mail, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

const app = express();


const appController = require('./routes/sign/signUp');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

appController(app);



const listen = ()=>{
    console.log("Listening at " + port);
};

app.listen(port, listen());
});
