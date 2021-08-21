var multer = require("multer");
var imageMiddleware = require("../middlewares/image-middleware");
var imageModel = require("../models/image-model");

module.exports = {
  imageUploadForm: function (req, res) {
    res.render("upload-form");
  },

  storeImage: function (req, res) {
    var upload = multer({
      storage: imageMiddleware.image.storage(),
      allowedImage: imageMiddleware.image.allowedImage,
    }).single("file");
    upload(req, res, function (err) {
      if (err) {
        res.send(err);
      } else {
        // store image in database
        var imageName = req.file.originalname;
        console.log(imageName);
        var inputValues = {
          image: imageName,
        };
        // call model
        imageModel.storeImage(inputValues, function (data) {
          console.log(data);
          res.render("upload-form", { alertMsg: data });
        });
      }
    });
  },

  displayImage: function (req, res) {
    imageModel.displayImage(function (data) {
      res.render("display-image", { imagePath: data });
      //console.log(data[0].image);
    });
  },
};
