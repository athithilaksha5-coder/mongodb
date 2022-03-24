var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var customerrouter = require("../controllers/customercontroller");

router.get('/viewproducts',customerrouter.findAll);
router.get('/purchase',customerrouter.purchase)

module.exports = router;
