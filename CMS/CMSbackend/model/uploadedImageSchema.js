const mongoose = require("mongoose");

const uploadedImageSchema = mongoose.Schema(
    {
        filename: {type: String, required: true, unique: true},
        path: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const UploadedImage = mongoose.model("uploadedimage", uploadedImageSchema);
module.exports = UploadedImage