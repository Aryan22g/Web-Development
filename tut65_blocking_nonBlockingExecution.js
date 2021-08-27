// Blocking and non blocking execution
// Synchronous or Blocking 
// -executes line by line

// ASynchronous or NonBlocking
// - line by line not guaranteed
//-callbacks will fire

const fs = require("fs");
fs.readFile("dele.txt","utf-8", (err,data)=>{
    console.log(data);
});
console.log("This si a  message");