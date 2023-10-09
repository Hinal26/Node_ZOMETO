const Joi = require("joi")

/**create add item */
const createAddItem = {
    body: Joi.object().keys({
        qunttity: Joi.string().required().trim(),
        subTotal_price: Joi.string().required().trim(),
        order_details: Joi.string().required().trim(),
    })
}

/**list add item */
const getAddItem = {
    query: Joi.object().keys({
        qunttity: Joi.string().allow("").trim(),
        subTotal_price: Joi.string().allow("").trim(),
        order_details: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createAddItem,
    getAddItem,
}