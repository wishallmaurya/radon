const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

const User1Control= require("../controllers/user1Control")
const ProductControl= require("../controllers/productcontrol")
const OrderControl = require ("../controllers/ordercontrol")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", BookController.createBook  )




router.post("/createUser", UserController.createUser)



router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)


router.post("/createUser1",commonMW.mw1,User1Control.createUser1  )

router.post("/createProduct", commonMW.mw1,ProductControl.createProduct )

router.post("/createOrder", OrderControl.createOrder  )


module.exports = router;