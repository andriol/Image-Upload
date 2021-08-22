var multer = require("multer");

image = {
  storage: function () {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "public/images/");
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });
    return storage;
  },

  allowedImage: function (req, file, cb) {
    if (
      file.mimetype.includes("jpeg") ||
      file.mimetype.includes("png") ||
      file.mimetype.includes("jpg")
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
};
module.exports = image;
