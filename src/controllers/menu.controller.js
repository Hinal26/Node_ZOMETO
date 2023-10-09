const { menuService } = require("../services")
/**create menu*/
const createMenu = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("Menu image is required!");
        }

        const menu = await menuService.createMenu(reqBody);
        if (!menu) {
            throw new Error("menu not found!")
        }
        res.status(200).json({
            success: true,
            message: ("menu create successfully!"),
            data: { menu }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list menu */
const getMenu = async (req, res) => {
    try {
        const reqBody = req.body;
        const menu = await menuService.getMenu(reqBody);
        if (!menu) {
            throw new Error("menu not found!")
        }
        res.status(200).json({
            success: true,
            message: ("menu list successfully!"),
            data: { menu }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete menu */
const deleteMenu = async (req, res) => {
    try {
        const id = req.params.Id;
        const menuEx = await menuService.getMenu();
        if (!menuEx) {
            throw new Error("menu not found!")
        }
        const menu = await menuService.deleteMenu(id)
        res.status(200).json({
            success: true,
            message: ("menu delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update menu */
const updateMenu = async (req, res) => {
    try {
        const id = req.params.Id;
        const menuEx = await menuService.getMenuById();
        if (!menuEx) {
            throw new Error("menu not found!")
        }
        const menu = await menuService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("menu update successfully!"),
            data: menu
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createMenu,
    getMenu,
    deleteMenu,
    updateMenu
}