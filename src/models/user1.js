
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
  
    balance: {
        type: Number,
        default: 100,
       
    },
    address:String,
    age: Number,
       gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    isFreeAppUser: {type:Boolean,
    default:false}// Default false value.
    })
    module.exports = mongoose.model('User1', userSchema) //users