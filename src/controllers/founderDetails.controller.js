const { founderDetailsService } = require("../services")
/**create founder details */
const createFounderDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const founderDetails = await founderDetailsService.createFounderDetails(reqBody);
        if (!founderDetails) {
            throw new Error("founder Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("founder create successfully!"),
            data: { founderDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list founder details */
const getFounderDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const founderDetails = await founderDetailsService.getFounderDetails(reqBody);
        console.log();
        if (!founderDetails) {
            throw new Error("founder Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("founder list successfully!"),
            data: { founderDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete founder details */
const deleteFounderDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const founderDetailsEx = await fDetaounderilsService.getFounderDetails();
        if (!founderDetailsEx) {
            throw new Error("Founder Details not found!")
        }
        const founderDetails = await founderDetailsService.deleteFounderDetails(id)
        res.status(200).json({
            success: true,
            message: ("founder delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update founder details */
const updateFounderDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const founderDetailsEx = await founderDetailsService.getFounderDetailsById();
        if (!founderDetailsEx) {
            throw new Error("founder Details not found!")
        }
        const founderDetails = await founderDetailsService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("founder update successfully!"),
            data: founderDetails
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createFounderDetails,
    getFounderDetails,
    deleteFounderDetails,
    updateFounderDetails
}