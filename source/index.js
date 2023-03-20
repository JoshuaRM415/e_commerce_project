const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('/public'));
app.use(bodyParser.json());

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})