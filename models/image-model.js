var db = require("../database");

function storeImage(vals, callback) {
  db.query("SELECT * FROM images WHERE image =?", vals, function (err, data) {
    if (err) {
      throw err;
    } else if (data.length > 1) {
      var msg = vals.image + " already exists";
    } else {
      db.query("Insert INTO images SET ?", vals, function (err, data) {
        if (err) throw err;
      });

      var msg = vals.image + " uploaded successfully";
    }
    return callback(msg);
  });
}

function displayImage(callback) {
  db.query("SELECT image FROM images", function (err, data) {
    console.log(data[0].image);
    if (err) throw err;
    return callback(data);
  });
}
module.exports = {
  storeImage,
  displayImage,
};
