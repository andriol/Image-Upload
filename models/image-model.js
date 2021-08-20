var db = require("../database");

module.exports = {
  storeImage: function (vals, callback) {
    db.query("Insert INTO images SET ?", vals, function (err, data) {
      if (err) throw err;
    });
    var msg = vals.image + " is uploaded successfully";

    return callback(msg);
  },

  //   displayImage: function (callback) {
  //     var sql = "SELECT image FROM images";
  //     db.query(sql, function (err, data) {
  //       //console.log(data[0].image);
  //       if (err) throw err;
  //       return callback(data);
  //     });
  //   },
};
