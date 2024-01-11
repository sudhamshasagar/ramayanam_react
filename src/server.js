const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log(formData)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prabhusumantha77@gmail.com',
      pass: '.......',
    },
  });
  console.log(formData)

  const mailOptions = {
    from: 'prabhusumantha77@gmail.com',
    to: 'sumanthprabhu2000@gmail.com',
    subject: 'New Form Submission',
    html: `
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Message: ${formData.message}</p>
      <p>Instagram: ${formData.instagram}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
