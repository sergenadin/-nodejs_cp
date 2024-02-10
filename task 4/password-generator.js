// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
	const password = generatePassword.generate({
		length: 10,
		numbers: true,
		symbols: true,
		uppercase: true,
		lowercase: true
	});

	console.log(password);
}

generateRandomPassword();