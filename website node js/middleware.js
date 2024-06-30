const express =require('express');
const app=express();
const {weatherSchema} =require('./joi_schema');
const {expressError} =require('./utils/expressError')


module.exports.validateWeather=(req,res,next)=>{
    const { error, value } = weatherSchema.validate( req.body );
    if(error){
        console.log(error);
        const msg = error.details.map(el => el.message).join(',')
       throw new expressError(msg, 404 );
    }
    else{
        return next();
    }

}