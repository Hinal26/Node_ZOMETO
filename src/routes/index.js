const express = require("express")

const founderDetailsRoute = require("./founderDetails.route")
const cafeDetailsRoute = require("./cafeDetails.route")
const stateRoute = require("./state.route")
const areaRoute = require("./area.route")
const menuRoute = require("./menu.route")
const userRoute = require("./user.route")
const addItemRoute = require("./addItem.route")
const orderDetailsRoute = require("./orderDetails.route")

const router = express.Router();

router.use("/founderDetails", founderDetailsRoute);
router.use("/cafeDetails", cafeDetailsRoute);
router.use("/state", stateRoute);
router.use("/area", areaRoute);
router.use("/menu", menuRoute);
router.use("/user", userRoute);
router.use("/addItem", addItemRoute);
router.use("/orderDetails", orderDetailsRoute);

module.exports = router;