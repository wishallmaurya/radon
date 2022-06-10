const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find(select({bookname:1,authorName:1}))
    res.send({msg: allBooks})
}
const getBooksInYear= async function (req, res) {
    // let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear