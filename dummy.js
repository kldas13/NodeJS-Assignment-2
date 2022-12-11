const fs = require("fs");

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

myFileReader("");
