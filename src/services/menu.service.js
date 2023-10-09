const { Menu } = require("../models")

/**
 * create menu
 * @param {object} reqBody
 * @returns {Promise<Menu>}
 */
const createMenu = async (reqBody) => {
    return Menu.create(reqBody)
};

/**list menu */
const getMenu = async () => {
    return Menu.find().populate("price", { price: 1 })
}

/**delete menu */
const deleteMenu = async (Id) => {
    return Menu.findByIdAndDelete(Id)
}

/**get by id  */
const getMenuById = async (Id) => {
    return Menu.findById(Id)
}

/**update menu  */
const updateDetails = async (Id, updateBody) => {
    return Menu.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createMenu,
    getMenu,
    deleteMenu,
    getMenuById,
    updateDetails
}
