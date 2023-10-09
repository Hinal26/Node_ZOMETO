const express = require("express")
const { addItemVallidation } = require("../../validations")
const { addItemController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create-add item */
router.post(
    "/create-addItem",
    validate(addItemVallidation.createAddItem),
    addItemController.createAddItem
);

/**list-add item */
router.get(
    "/list-addItem",
    validate(addItemVallidation.getAddItem),
    addItemController.getAddItem
);

/**delete-add item */
router.delete(
    "/delete-addItem/:ID",
    addItemController.deleteAddItem
);
/**update-add item */
router.delete(
    "/update-addItem/:ID",
    addItemController.updateAddItem
);

module.exports = router