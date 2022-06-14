const { count } = require("console")
const productmodel= require("../models/product")

const createProduct= async function (req, res) {
    let data = req.body
   
    let savedData= await productmodel.create(data)
    res.send({data: savedData})

    
}

module.exports.createProduct= createProduct 