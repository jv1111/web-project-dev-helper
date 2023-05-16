const express = require("express");
const router = express.Router();
const SystemController = require("../controllers/SystemController.js");
const { KeyValidation } = require("../middlewares/KeyValidationMiddleware");

router.get(
    "/key",
    SystemController.getKey
);

router.put(
    "/sendEmail",
    KeyValidation,
    SystemController.sendEmail,

)

module.exports = router;