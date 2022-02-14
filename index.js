const fs = require("fs");

fs.readdir("./", (err, filenames) => {
    if (err) {
        throw new Error(err);
        return;
    } else {
        console.log(filenames);
    }
});