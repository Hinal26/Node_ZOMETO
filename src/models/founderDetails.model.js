const mongoose = require("mongoose")

const founderDetailsSchima = new mongoose.Schema(
    {
        founder_name: {
            type: String,
            trim: true
        },
        phone_number: {
            type: Number,
        },
        email: {
            type: String,
            trim: true
        },
        cafe_detail: {
            type: mongoose.Types.ObjectId,
            ref: "cafeDetails"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const founderDetails = mongoose.model("founderDetails", founderDetailsSchima)
module.exports = founderDetails;