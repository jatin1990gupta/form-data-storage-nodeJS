const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'gia9@ethereal.email',
      pass: 'WDnSgKQhHaYQJqP1t5'
  }
});

exports.adminMail = function(name, email, phone) {

  let mailOptions = {
    from: 'crystal.trantow25@ethereal.email',
    to: 'admin@xyz.com',
    subject: 'New Response recorded.',
    text: `Name: ${name}, email: ${email}, phone: ${phone}`
  } 
  
  transporter.sendMail(mailOptions, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Email Sent: '+result.response);
    }
  });
}

exports.userMail = function(name, email) {

  let mailOptions = {
    from: 'crystal.trantow25@ethereal.email',
    to: email,
    subject: 'Thanks.',
    text: `Dear ${name}, Your response is recorded successfully.`
  } 
  
  transporter.sendMail(mailOptions, (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Email Sent: '+result.response);
    }
  });
}


