const express = require('express');
const router = express.Router();

/* GET USERS LISTING */
router.get('/',(req, res, next)=>{
    res.end('respond with a resource');

});



module.exports = router;