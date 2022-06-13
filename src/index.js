const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { $where } = require('./models/userModel.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://wishall:vishal@atlascluster.p9u9uvd.mongodb.net/vishal13-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


   



  const MWcall= function (req, res, next) {
        console.log ("gobal MW testing ")
        const currentdate= new Date()
        const datetime = currentdate.getDate()+'-Date'+' ' + (currentdate.getMonth()+1)+ '-Month '+' ' + currentdate.getFullYear() + '-Year '+' ' + currentdate.getHours() + '-Hours '+' ' + currentdate.getMinutes() + '-Minutes '+' ' + currentdate.getSeconds() + '-Seconds ' +' '

        const ip = req.ip
        const url= req.originalUrl
        console.log(datetime +' '+ 'The IP is'+ ip+' ' + 'The url is'+ url)
        next();
  }
  ;

app.use(MWcall);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
