const express = require('express');
const {Car,validateCar}= require('../models/carInfo');
const {Owner} = require("../models/carOwner")

const router  = express.Router();

router.get('/', async(req,res)=>{
    const carInfo = await Car.find();
    res.status(200).send(carInfo);
});

router.post('/', async(req,res)=>{
    const owner = await Owner.findById(req.body.ownerId);
    const car  = Car({
        ownerId:req.body.ownerId,
        name:req.body.name,
        madeYear:req.body.madeYear,
        registerDate:req.body.registerDate,
        owner:owner
    })
    const {error} = validateCar(req.body);
    if(error){
        res.status(404).send(error.details[0].message)
    }
    const saved = await car.save();
    res.status(201).send(saved)
});

module.exports = router;