//router for 'plants' endpoint.
const express = require('express');
//database query method
const db = require('/db/index.js')

const plantRouter = express.Router();

//show all the plants
plantRouter.get('/',(req,res,next) => {
    db.getAllPlants().then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
})

//show an individual plant.
plantRouter.get('/:plant_id',(req,res,next)=>{
    db.getPlant(req.params.id).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    })
    }
)

//add a plant. This should be only done internally
plantRouter.post('/')

//Modify a plant's inventory? or change some detail? 
//Again, this should be done internally 
plantRouter.put('/:plant_id')

//Remove a product from the database. Internal as well.
plantRouter.delete('')

module.exports.plantRouter;