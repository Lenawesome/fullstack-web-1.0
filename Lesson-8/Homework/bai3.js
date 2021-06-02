const currentFolder = './';
const fs = require('fs');

fs.readdir(currentFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});