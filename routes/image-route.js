const express = require("express");
const router = express.Router();
const imageController = require("../controllers/image-controller");

router.get("/store-image", imageController.uploadForm);

router.post("/store-image", imageController.storeImage);

router.get("/display-image", imageController.displayImage);

module.exports = router;
