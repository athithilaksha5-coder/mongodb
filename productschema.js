var mongoose=require('mongoose');

var ProductSchema = new mongoose.Schema({
	ProductId:Number,
	ProductName:String,
	Quantity: Number,
    Price:Number
});

module.exports = mongoose.model('product', ProductSchema);
