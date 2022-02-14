#!/usr/bin/env node
const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();
console.log(process.argv);

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        throw new Error(err);
        return;
    };

    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);
    
    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(chalk.green(filenames[index]));
        } else {
            console.log(chalk.yellow(filenames[index]));
        }
    }
});