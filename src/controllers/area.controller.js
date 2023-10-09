const { areaService } = require("../services")
/**create area */
const createArea = async (req, res) => {
    try {
        const reqBody = req.body;
        const city = await areaService.createArea(reqBody);
        if (!city) {
            throw new Error("area not found!")
        }
        res.status(200).json({
            success: true,
            message: ("area create successfully!"),
            data: { area }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list area */
const getArea = async (req, res) => {
    try {
        const reqBody = req.body;
        const area = await areaService.getArea(reqBody);
        if (!area) {
            throw new Error("area not found!")
        }
        res.status(200).json({
            success: true,
            message: ("area list successfully!"),
            data: { area }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete area */
const deleteArea = async (req, res) => {
    try {
        const id = req.params.Id;
        const areaEx = await areaService.getArea();
        if (!areaEx) {
            throw new Error("area not found!")
        }
        const area = await areaService.deleteArea(id)
        res.status(200).json({
            success: true,
            message: ("area delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update area */
const updateArea = async (req, res) => {
    try {
        const id = req.params.Id;
        const areaEx = await areaService.getAreaById(id);
        if (!areaEx) {
            throw new Error("area not found!")
        }
        const area = await areaService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("area update successfully!"),
            data: { area }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createArea,
    getArea,
    deleteArea,
    updateArea
}