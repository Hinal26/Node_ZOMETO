const { cafeDetailsService } = require("../services")

/**create cafe details */
const createCafeDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const cafeDetails = await cafeDetailsService.createCafeDetails(reqBody);
        if (!cafeDetails) {
            throw new Error("cafe Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("cafe create successfully!"),
            data: { cafeDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list cafe details */
const getCafeDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const cafeDetails = await cafeDetailsService.getCafeDetails(reqBody);
        if (!cafeDetails) {
            throw new Error("cafe Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("cafe list successfully!"),
            data: { cafeDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete cafe details */
const deleteCafeDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const cafeDetailsEx = await cafeDetailsService.getCafeDetails();
        if (!cafeDetailsEx) {
            throw new Error("cafe Details not found!")
        }
        const cafeDetails = await cafeDetailsService.deleteCafeDetails(id)
        res.status(200).json({
            success: true,
            message: ("cafe delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update cafe details */
const updateCafeDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const cafeDetailsEx = await cafeDetailsService.getCafeDetailsById(id);
        if (!cafeDetailsEx) {
            throw new Error("cafe Details not found!")
        }
        const cafeDetails = await cafeDetailsService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("cafe update successfully!"),
            data: { cafeDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    createCafeDetails,
    getCafeDetails,
    deleteCafeDetails,
    updateCafeDetails
}