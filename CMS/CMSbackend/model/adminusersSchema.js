const mongoose = require("mongoose");

const adminuserSchema = mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const AdminUser = mongoose.model("adminusers", adminuserSchema);
module.exports = AdminUser;