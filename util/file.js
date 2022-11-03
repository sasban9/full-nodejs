const fs = require("fs");
const path = require("path");

const deleteFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
        if (err) {
          throw err;
        }
      });
    }
};

exports.deleteFile = deleteFile;