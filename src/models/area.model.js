const mongoose = require("mongoose")

const areaSchema = new mongoose.Schema(
    {
        area_name: {
            type: String,
            trim: true
        },
        state: {
            type: mongoose.Types.ObjectId,
            ref: "state"
        },
        country_name: {
            type: mongoose.Types.ObjectId,
            ref: "user"
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

const area = mongoose.model("area", areaSchema);
module.exports = area;