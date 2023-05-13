const express = require("express");
const router = express.Router();
const SystemController = require("../controllers/SystemController.js");

router.get(
    "/key",
    SystemController.getKey
);

module.exports = router;