const process = require('process');
const fs = require('fs');

let myArgs = process.argv.slice(2);
myArgs.forEach(function (file){
   fs.readFile(file, 'utf8', function (err, data){
    if(err) throw new Error(err);
    console.log(`File: ${file} has content: ${data}`);
   });
});

