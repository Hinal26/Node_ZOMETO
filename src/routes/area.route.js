const express = require("express");
const areaVallidation = require("../../validations/area.vallidation")
const { areaController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create area */
router.post(
    "/create-area",
    validate(areaVallidation.createArea),
    areaController.createArea
);

/**list area */
router.get(
    "/get-area",
    validate(areaVallidation.getArea),
    areaController.getArea
);

/**delete area */
router.delete(
    "/get-area/:Id",
    areaController.deleteArea
);

/**update area */
router.put(
    "/get-area/:Id",
    areaController.updateArea
);


module.exports = router