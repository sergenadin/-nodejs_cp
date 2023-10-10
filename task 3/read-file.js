const fs = require("fs");

// Read the content of "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
	} else {
		console.log('Data from "welcome.txt":', data);
	}
});
