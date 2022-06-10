const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorID: {type: mongoose.Schema.Types.ObjectId,ref: "Author"}, 
    price: String,
    
    rating: String,
    publisher: {type : mongoose.Schema.Types.ObjectId, ref: "Publisher"}
    
},
{ timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
