const { CafeDetails } = require("../models")

/**
 * create cafe details
 * @param {object} reqBody
 * @returns {Promise<CafeDetails>}
 */
const createCafeDetails = async (reqBody) => {
    return CafeDetails.create(reqBody)
};
/**list cafe details */
const getCafeDetails = async () => {
    return CafeDetails.find().populate("ow_details", { founder_name: 1 })
};

/**delete cafe details */
const deleteCafeDetails = async (id) => {
    return CafeDetails.findByIdAndDelete(id)
};

/**get cafe details */
const getCafeDetailsById = async (id) => {
    return CafeDetails.findById(id)
};

/**update cafe details */
const updateDetails = async (id, updateBody) => {
    return CafeDetails.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createCafeDetails,
    getCafeDetails,
    deleteCafeDetails,
    getCafeDetailsById,
    updateDetails
}