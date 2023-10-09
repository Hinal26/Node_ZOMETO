const mongoose = require("mongoose")

const addItemSchima = new mongoose.Schema(
    {
        qunttity: {
            type: String,
            trim: true
        },
        subTotal_price: {
            type: Number,
            trim: true
        },
        order_details: {
            type: mongoose.Types.ObjectId,
            ref: "orderDetails"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const addItem = mongoose.model("addItem", addItemSchima)
module.exports = addItem;