const { count } = require("console")
const user1model= require("../models/user1")

const createUser1= async function (req, res) {
    let data = req.body
   
    let savedData= await user1model.create(data)
    res.send({data: savedData})

    
}

module.exports.createUser1= createUser1