
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{type:String,
    ref:"User1"},
	productId:Number,
	amount: Number,
	isFreeAppUser:Boolean, 
	date: String
})

module.exports = mongoose.model('Order', orderSchema) //order