// email-sender.js
const nodemailer = require('nodemailer');

//un transporteur SMTP réutilisable en utilisant les informations d'authentification fournies par votre fournisseur de services de messagerie
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'sergepetcha@gmail.com',
		pass: 'aa102030'
	}
});

// les options de l'e-mail
const mailOptions = {
	from: 'sergepetcha@gmail.com',
	to: 'sergepetcha@gmail.com',
	subject: 'Test email',
	text: 'Hello, this is a test email!'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});