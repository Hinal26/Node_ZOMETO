const mongoose = require("mongoose")

const cafeDetailsSchema = new mongoose.Schema(
    {
        cafe_name: {
            type: String,
            trim: true
        },
        cafe_address: {
            type: String,
            trim: true
        },
        cafe_number: {
            type: String,
        },
        start_date: {
            type: String,
            default: (new Date()).getTime()
        },
        end_date: {
            type: String,
            default: false,
        },
        cafe_reting: {
            type: String,
            trim: true,
        },
        founder_details: {
            type: mongoose.Types.ObjectId,
            ref: "FounderDetails"
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const founderDetails = mongoose.model("founderDetails", founderDetailsSchema);
module.exports = founderDetails;