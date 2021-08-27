// built-in modules of NODE.js
//modules are like libraries in javascript
const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("file", "folder");

console.log(text);

console.log("Creating a new file");
fs.writeFileSync("rohan.txt",text);


//search built in module sin google and practice some of these modules