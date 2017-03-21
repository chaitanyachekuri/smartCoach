/**
 * Created by kchekuri on 3/21/2017.
 */
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
   res.send("Working");
});

module.exports = router;
