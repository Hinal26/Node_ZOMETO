const express = require("express")
const { founderDetailsVallidation } = require("../../validations")
const { founderDetailsController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create-founder Details */
router.post(
    "/create-fouderDetails",
    validate(founderDetailsVallidation.createFounderDetails),
    founderDetailsController.createFounderDetails
);

/**list-founder Details */
router.get(
    "/list-founderDetails",
    validate(founderDetailsVallidation.getFounderDetails),
    founderDetailsController.getFounderDetails
);

/**delete-founder Details */
router.delete(
    "/delete-founderDetails/:ID",
    founderDetailsController.deleteFounderDetails
);
/**update-founder Details */
router.delete(
    "/update-founderDetails/:ID",
    founderDetailsController.updateFounderDetails
);

module.exports = router