const mongoose = require("mongoose");

const vaildRefreshtokensSchema = mongoose.Schema(
    {   
        username: {type: String, required: true},
        refreshToken: {type: String, required: true, unique: true}
    },
    {
        timestamps: true
    }
)

const VaildRefreshtokens = mongoose.model("validRefreshtokens", vaildRefreshtokensSchema);
module.exports = VaildRefreshtokens;
