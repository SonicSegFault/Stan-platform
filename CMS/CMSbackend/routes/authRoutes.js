const express = require("express");
const router = express.Router();

const {
    postLogin,
    postRegister,
    postRefresh,
    postLogout
} = require("../controllers/authController");
// Applying express.json() to all routes in this router
router.use(express.json());

router.route("/login").post(postLogin);
router.route("/register").post(postRegister);
router.route("/refresh").post(postRefresh);
router.route("/logout").post(postLogout);

module.exports = router;
