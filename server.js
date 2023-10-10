// Import the 'http' module
const http = require("http");

// Create a server that listens on port 3000
const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" }); // Set the response header
	res.end("<h1>Hello Node!!!!</h1>\n"); // Send the response
});

// Start the server and listen on port 3000
server.listen(3000, () => {
	console.log("Server is running on http://localhost:3000/");
});
