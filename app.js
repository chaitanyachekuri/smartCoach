'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const users = require('./routes/users');

const port = 3000;

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use('/users', users);

app.get('/', (req, res)=>{
    res.send("working");
});

const listen = ()=>{
    console.log("Listening at " + port);
}

app.listen(port, listen());
