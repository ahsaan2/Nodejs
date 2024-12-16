// file handling in js -->> file system is the core feature provided by the fs(file system) module. It allows to work with the files and
// directories on the server.
const { isUtf8 } = require("buffer");

const os = require('os')   // gives the information about out computer
console.log(os.cpus().length);  // 8


const fs = require("fs"); // importing the fils system module
//2 => Synchronous mode(Blocking) -> Executes the file "one at a time", and "waits for its completion" before moving to the next
// -> Asynchronous(Non blocking mode) -> Executes the "operation in the background" ,and uses "callback or promises" to handle the responses.
fs.writeFileSync(
  "./text.txt",
  "writeFileSync method is used to synchronously write data to a file. If the file does not exist it creates a new one"
);

fs.writeFile("/text1.txt", "A synchronous file", (err) => {});
// Blocking -->> execution is done from top to bottom
// console.log("1");

// const result = fs.readFileSync("./Contacts.txt", "utf-8");
// console.log(result);
// console.log("3");

// Non-Blocking
console.log("4");
fs.readFile("./Contacts.txt", "utf-8", (err, result) => {  // this statement will not be exuted just after loggin 4, because 
    // it is a Asynchronous function, and it does not block the thread, it will be executed once complete loading is done.
  
    console.log(result);
  
});
console.log('5');
// Default thread pool size is 4, and it depends on the core of cpu
// this pc can have max of 8 threads, os.cpus().length

