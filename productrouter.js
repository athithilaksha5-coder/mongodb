var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var productRouter = require("../controllers/productcontroller");
 
router.get('/',productRouter.dashboard);

router.get('/save',productRouter.create);

router.get('/viewproducts', productRouter.findAll);

router.get('/deleteproduct',productRouter.deleteProduct);

router.get('/updateproduct',productRouter.updateProduct);

module.exports = router;
