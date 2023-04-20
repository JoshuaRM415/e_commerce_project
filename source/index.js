const express = require('express');
const bodyParser = require('body-parser');


//database router
const plantRouter = require('/routes/plantRoutes.js')

const app = express();


app.use(express.static('/public'));
app.use(bodyParser.json());
//these headers allow our app to recieve requests from React
app.use(function (req,res,next) {
    //be sure this port matches the port we actually put the web app on. 
    //How do these headers help? is this COORS? 
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers');
    next();
})

app.use('/plants',plantRouter)

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})