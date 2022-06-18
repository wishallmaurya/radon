const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const meme= require("../controllers/meme.js")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/centresindistrict", CowinController.centresindistrict)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

//2>>>......meme

router.get("/getmemeId", meme.getmemeId)

router.post("/postmeme", meme.postmeme)


module.exports = router;