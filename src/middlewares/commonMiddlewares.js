
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const mw1= function ( req, res, next) {

    // const isFreeAppUser = function (req, res, next){
    //     let user = req.headers.isFreeAppUser
    //     if( user == true)
    //     console.log("header is present")
    //     next()
    // }
//     const mw1= function (req, res, next) {

//     let header = req.headers.isfreeuser;

//     if((header == "true"))
//     next()
//     else
//     return res.send({msg:"request is missing a mandatory header"}) 
    
// };

const mw1= function ( req, res, next) {
    if (req.header.isFreeAppUser==true ){next()}
    else if (req.header.isFreeAppUser==false){next()}
    else{res.send("isFreeAppUser is not present the request is missing and it is a mandatory header")}

   
}

    
    
    module.exports.isFreeAppUser = isFreeAppUser
    
    next()
}
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mw1= mw1
