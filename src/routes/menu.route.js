const express = require("express")
const menuVallidation = require("../../validations/menu.vallidation")
const { menuController } = require("../../controllers")
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/**create menu */
router.post(
    "/create-menu",
    upload.single("image"),
    validate(menuVallidation.createMenu),
    menuController.createMenu
);

/**list menu */
router.get(
    "/list-menu",
    validate(menuVallidation.getMenu),
    menuController.getMenu
);

/**delete menu */
router.delete(
    "/delete-menu/:ID",
    menuController.deleteMenu
);
/**update menu */
router.delete(
    "/update-menu/:ID",
    menuController.updateMenu
);

module.exports = router