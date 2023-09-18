const mongoose = require('mongoose');
const Joi = require('joi')

const ownerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true
    },
    tel:{
        type:Number,
        required:true,
        min:11
    }
})

const Owner = mongoose.model('Owner', ownerSchema);

function validateOwner(request){
    const schema=Joi.object({
        name:Joi
            .string()
            .required()
            .min(3),
        email:Joi
            .string(),
        tel:Joi.number()
            .required()
            .min(11)
    })
    return schema.validate(request)
}

module.exports={
    Owner:Owner,
    validateOwner:validateOwner
}