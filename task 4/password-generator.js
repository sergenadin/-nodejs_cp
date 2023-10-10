const generatePassword = require("generate-password");

// Function to generate and log a random password
function generateRandomPassword() {
	const password = generatePassword.generate({
		length: 12, // Adjust the length of the generated password as needed
		numbers: true,
		symbols: true,
		lowercase: true,
		uppercase: true,
		excludeSimilarCharacters: true,
	});

	console.log("Generated Password:", password);
}

// Call the function to generate and log a random password
generateRandomPassword();
