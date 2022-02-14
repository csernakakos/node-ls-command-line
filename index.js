#!/usr/bin/env node
const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        throw new Error(err);
        return;
    } else {
        console.log(filenames);
    }
});