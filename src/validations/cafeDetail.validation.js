const Joi = require("joi")

/**create cafe details */
const createCafeDetails = {
    body: Joi.object().keys({
        cafe_name: Joi.string().required().trim(),
        cafe_address: Joi.string().required().trim(),
        cafe_number: Joi.string().required().trim(),
        start_date: Joi.string().required().trim(),
        end_date: Joi.string().required().trim(),
        cafe_reting: Joi.string().required().trim(),
        founder_details: Joi.string().required().trim(),

    })
}
/**list cafe details */
const getCafeDetails = {
    query: Joi.object().keys({
        cafe_name: Joi.string().allow("").trim(),
        cafe_address: Joi.string().allow("").trim(),
        cafe_number: Joi.string().trim().allow(""),
        start_date: Joi.string().trim().allow(""),
        end_date: Joi.string().trim().allow(""),
        cafe_reting: Joi.string().allow("").trim(),
        founder_details: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createCafeDetails,
    getCafeDetails
}