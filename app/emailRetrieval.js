const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your@gmail.com',  // Your Gmail email address
    pass: 'yourpassword',   // Your Gmail password
  },
});

function retrieveEmails(subject) {
  const searchOptions = {
    from: 'any@email.com',  // Sender's email address
    subject: subject,
  };

  return new Promise((resolve, reject) => {
    transporter.search(searchOptions, (err, emails) => {
      if (err) {
        reject(err);
      } else {
        resolve(emails);
      }
    });
  });
}
