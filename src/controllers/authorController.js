const AuthorModel= require("../models/authorModel")
const PublisherModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const createPublisher= async function (req, res) {
    let publisher = req.body
    let authorCreated = await PublisherModel.create(publisher)
    res.send({data: authorCreated})
}

const getPublisherData= async function (req, res) {
    let authors = await PublisherModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData