const process = require('process');
const fs = require('fs');

let myArgs = process.argv.slice(2);

let filePath = myArgs[0];
let content = myArgs[1];

console.log(myArgs);

fs.writeFile(filePath, content, function(err) {
    if(err) throw new Error(err);
    console.log("The file was saved!");
});


