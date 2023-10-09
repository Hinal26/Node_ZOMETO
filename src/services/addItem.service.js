const { AddItem } = require("../models");

/**
 * create add Item
 * @param {object} reqBody
 * @returns {Promise<AddItem>}
 */
const createAddItem = async (reqBody) => {
    return AddItem.create(reqBody)
};

/**list add Item */
const getAddItem = async () => {
    return AddItem.find().populate("order_details", { order_date: 1, order_status: 1, price: 1 })
}

/**delete add Item */
const deleteAddItem = async (Id) => {
    return AddItem.findByIdAndDelete(Id)
}

/**get by id  */
const getAddItemById = async (Id) => {
    return AddItem.findById(Id)
}

/**update add Item  */
const updateDetails = async (Id, updateBody) => {
    return AddItem.findByIdAndUpdate(Id, { $set: updateBody })
}

module.exports = {
    createAddItem,
    getAddItem,
    deleteAddItem,
    getAddItemById,
    updateDetails
}
