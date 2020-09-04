const User = require('../models/user');

exports.getIndex = (req, res, next) => {
  res.status(200).json({
    pageTitle: 'IndexPage'
  });
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
      res.status(200).json(result);
      console.log('Data Inserted Successfully');
    })
    .catch(err => {
      console.log(err);
    })
}