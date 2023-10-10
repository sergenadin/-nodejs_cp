// Import the 'fs' (file system) module
const fs = require("fs");

// Define the content to write to the file
const content = "Hello Node";

// Write the content to the "welcome.txt" file
fs.writeFileSync("welcome.txt", content);

console.log('File "welcome.txt" created with content: ' + content);
