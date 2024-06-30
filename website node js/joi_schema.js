const Joi = require('joi');

module.exports.weatherSchema = Joi.object({
    weather: Joi.object({
        MinTemp: Joi.number().required(),
        MaxTemp: Joi.number().required(),
        Rainfall: Joi.number().required(),
        Evaporation : Joi.number().required(),
        Sunshine: Joi.number().required(),
        WindGustDir: Joi.string().required(),
        WindGustSpeed: Joi.number().required(),
        WindDir9am: Joi.string().required(),
        WindDir3pm: Joi.string().required(),
        WindSpeed9am: Joi.number().required(),
        WindSpeed3pm: Joi.number().required(),
        Humidity9am: Joi.number().required(),
        Humidity3pm: Joi.number().required(),
        Pressure9am: Joi.number().required(),
        Pressure3pm: Joi.number().required(),
        Cloud9am: Joi.number().required(),
        Cloud3pm: Joi.number().required(),
        Temp9am: Joi.number().required(),
        Temp3pm: Joi.number().required(),
    }).required()
})

