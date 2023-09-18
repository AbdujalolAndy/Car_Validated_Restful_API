const express = require('express');
const {Owner,validateOwner} =require('../models/carOwner');

const router = express.Router();

router.get('/', async(req,res)=>{
    const owner = await Owner.find();
    res.status(200).send(owner);
});

router.post('/',async(req,res)=>{
    const {error,value}=validateOwner(req.body);
    if(error){
        res.status(404).send(error.details[0].message)
    }
    const owner = Owner({
        name:req.body.name,
        tel:req.body.tel,
        email:req.body.email
    })

    const savedOwner =  await owner.save();
    res.status(201).send(savedOwner)
})

module.exports =router;
