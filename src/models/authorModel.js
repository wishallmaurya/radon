const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    author_name: String,
    age:Number,
    address:String,
    rating: String

}, { timestamps: true });


const publisherSchema = new mongoose.Schema( {
    
    _id: String,
    name:String,
    headQuater:String

}, { timestamps: true });



module.exports = mongoose.model('Author', authorSchema)
module.exports = mongoose.model('Publisher', publisherSchema)
