const { Area } = require("../models")

/**
 * create Area
 * @param {object} reqBody
 * @returns {Promise<Area>}
 */
const createArea = async (reqBody) => {
    return Area.create(reqBody)
};

/**list Area */
const getArea = async () => {
    return area.find().populate("state", { state_id: 1, state_name: 1 }).populate("country_name", { country: 1 })
};

/**delete Area */
const deleteArea = async (id) => {
    return Area.findByIdAndDelete(id)
};

/**get area */
const getAreaById = async (id) => {
    return Area.findById(id)
};

/**update Area */
const updateDetails = async (id, updateBody) => {
    return Area.findByIdAndUpdate(id, { $set: updateBody })
};

module.exports = {
    createArea,
    getArea,
    deleteArea,
    getAreaById,
    updateDetails
}