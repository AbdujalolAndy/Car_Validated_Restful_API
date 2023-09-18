const mongoose = require('mongoose');
const Joi = require('joi');

const carSchema  = new mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    madeYear:{
        type:Number,
        required:true
    },
    registerDate:{
        type:Date,
        default:Date.now()
    },
    owner:{
        type:Object,
        required:true
    }
})

const Car = mongoose.model("Car",carSchema);

function validateCar(request){
    const schema = Joi.object({
        ownerId:Joi
            .required(),
        name:Joi
            .string()
            .required(),
        madeYear:Joi
                .number()
                .required(),
        registerDate:Joi
                    .date(),
        owner:Joi
            .object()
            
    })
    return schema.validate(request)
}

module.exports = {
    Car:Car,
    validateCar:validateCar
}