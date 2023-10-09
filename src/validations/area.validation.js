const Joi = require("joi")

/**create area detals */
const createArea = {
    body: Joi.object().keys({
        area_name: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
        area_name: Joi.string().required().trim(),
    })
}

/**list area detals */
const getArea = {
    query: Joi.object().keys({
        area_name: Joi.string().allow("").trim(),
        state: Joi.string().allow("").trim(),
        area_name: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createArea,
    getArea,
}