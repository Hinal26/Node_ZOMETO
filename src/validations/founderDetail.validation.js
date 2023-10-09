const Joi = require("joi")

/**create founder detals */
const createFounderDetailsService = {
    body: Joi.object().keys({
        founder_name: Joi.string().required().trim(),
        phone_number: Joi.number().integer(),
        email: Joi.string().required().trim(),
        cafe_detail: Joi.string().required(),
    })
}

/**list founder detals */
const getFounderDetailsService = {
    query: Joi.object().keys({
        founder_name: Joi.string().allow("").trim(),
        phone_number: Joi.number().integer(),
        email: Joi.string().allow("").trim(),
        cafe_detail: Joi.string().allow(""),
    })
}

module.exports = {
    createFounderDetailsService,
    getFounderDetailsService,
}