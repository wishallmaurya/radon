const { count } = require("console")
const ordermodel= require("../models/order")

const createOrder= async function (req, res) {
    let data = req.body
   
    let savedData= await ordermodel.create(data)
    res.send({data: savedData})

    
}

module.exports.createOrder= createOrder