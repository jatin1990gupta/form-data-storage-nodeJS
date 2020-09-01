const User = require('../models/user');
const nodemailer = require('../utils/nodemailer');

exports.getIndex = (req, res, next) => {
  res.render('index');
}

exports.postData = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  const user = new User({
    name: name,
    email: email,
    phone: phone
  });

  user.save()
    .then(result => {
      console.log(result);
      console.log('Data Inserted Successfully');
      nodemailer.adminMail(name, email, phone);
      nodemailer.userMail(name, email);
    })
    .catch(err => {
      console.log(err);
    })

  res.render('success');
}