const { addItemService } = require("../services")
/**create add Item */
const createAddItem = async (req, res) => {
    try {
        const reqBody = req.body;
        const addItem = await addItemService.createAddItem(reqBody);
        if (!addItem) {
            throw new Error("Add Item not found!")
        }
        res.status(200).json({
            success: true,
            message: ("add create successfully!"),
            data: { addItem }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list add Item */
const getAddItem = async (req, res) => {
    try {
        const reqBody = req.body;
        const addItem = await addItemService.getAddItem(reqBody);
        console.log();
        if (!addItem) {
            throw new Error("add Item not found!")
        }
        res.status(200).json({
            success: true,
            message: ("add list successfully!"),
            data: { addItem }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete add Item */
const deleteAddItem = async (req, res) => {
    try {
        const id = req.params.Id;
        const addItemEx = await addItemService.getAddItem();
        if (!addItemEx) {
            throw new Error("add Item not found!")
        }
        const addItem = await addItemService.deleteAddItem(id)
        res.status(200).json({
            success: true,
            message: ("add delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update add Item */
const updateAddItem = async (req, res) => {
    try {
        const id = req.params.Id;
        const addItemEx = await addItemService.getAddItemById();
        if (!addItemEx) {
            throw new Error("add Item not found!")
        }
        const addItem = await addItemService.updateItem(id, req.body)
        res.status(200).json({
            success: true,
            message: ("add update successfully!"),
            data: addItem
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createAddItem,
    getAddItem,
    deleteAddItem,
    updateAddItem
}