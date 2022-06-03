const welcome= require('../logger/logger')
const myHelper = require('../util/helper')
const formating= require('../validator/formatter')
const express = require('express');
const underscore = require('underscore')
const router = express.Router();


// router.get('/welcome',function (req, res){
//     come.welcome()
// } )

router.get('/test-me', function (req, res) {

    welcome.welcome()

    myHelper.printDate()
    myHelper.printMonth()
    myHelper.getBatchInfo()



    

    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/fm', function (req, res) {

     
    formating.trimm()
    formating.changetoLowerCase()
    formating.changetoUpperCase()
})

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
    months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    console.log(_.chunk([1, 2, 3, 4, 5, 6], 2));
});



router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason