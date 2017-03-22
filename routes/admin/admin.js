const personalDetails = require('../../models/admin/personalDetails.model.js');


const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/admin/signUp', (req, res)=>{

console.log(req.body);

});

module.exports = router;
