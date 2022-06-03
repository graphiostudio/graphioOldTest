const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Production
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "../client/build");
// });

app.post("/email-sent", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: "mail.graphio.co.th",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_AUTH_USER,
    subject: `Message from Graphio website (${req.body.name}, ${req.body.business})`,
    html: `
    <h4>${req.body.name}, ${req.body.business}</h4>
    <p>Phone no.: ${req.body.phone}</p></br>
    <p>${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email sent " + info.response);
      res.send();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
