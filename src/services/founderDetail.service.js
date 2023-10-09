const { FounderDetails } = require("../models");

/**
 * create founder details
 * @param {object} reqBody
 * @returns {Promise<FounderDetails>}
 */
const createFounderDetails = async (reqBody) => {
    return FounderDetails.create(reqBody)
};

/**list founder details */
const getFounderDetails = async () => {
    return FounderDetails.find().populate("cafe_detail", { cafe_name: 1 })
}

/**delete founder details */
const deleteFounderDetails = async (Id) => {
    return FounderDetails.findByIdAndDelete(Id)
}

/**get by id  */
const getFounderDetailsById = async (Id) => {
    return FounderDetails.findById(Id)
}

/**update founder details  */
const updateDetails = async (Id, updateBody) => {
    return FounderDetails.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createFounderDetails,
    getFounderDetails,
    deleteFounderDetails,
    getFounderDetailsById,
    updateDetails
}
