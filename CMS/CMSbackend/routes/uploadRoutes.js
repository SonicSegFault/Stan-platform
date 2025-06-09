const express = require("express");
const router = express.Router();

const {
    upload,
    postImage,
    getImage
} = require("../controllers/uploadController");

const verifyAT = require("../middleware/verifyAT"); 
router.route("/image").post(
    upload.single("file"),
    verifyAT,
    express.json(),
    express.urlencoded({ extended: true }), 
    postImage);

router.route("/image/:filename").get(getImage);

module.exports = router;