const nodemailer = require("nodemailer");

// Create a transporter object using your SMTP configuration
const transporter = nodemailer.createTransport({
	service: "gmail", // e.g., 'gmail'
	auth: {
		user: "", // your email address
		pass: "", // your email password
	},
});

// Email message options
const mailOptions = {
	from: "shibalseki1818@gmail.com", // sender's email address
	to: "fahry657@gmail.com", // recipient's email address
	subject: "Hello from Node.js", // email subject
	text: "This is a test email sent from Node.js.", // email content (plain text)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.error("Error sending email:", error);
	} else {
		console.log("Email sent:", info.response);
	}
});
