const express = require("express");
const { cafeDetailsVallidation } = require("../../validations")
const { cafeDetailsController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create cafe Details */
router.post(
    "/create-cafeDetails",
    validate(cafeDetailsVallidation.createCafeDetails),
    cafeDetailsController.createCafeDetails
);

/**list cafe Details */
router.get(
    "/get-cafeDetails",
    validate(cafeDetailsVallidation.getCafeDetails),
    cafeDetailsController.getCafeDetails
);

/**delete cafe Details */
router.delete(
    "/get-cafeDetails/:Id",
    cafeDetailsController.deleteCafeDetails
);

/**update cafe Details */
router.put(
    "/get-cafeDetails/:Id",
    cafeDetailsController.updateCafeDetails
);


module.exports = router