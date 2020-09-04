const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);
app.use(errorController.get404);

mongoose.connect('mongodb+srv://rfm:helloworld@cluster0.xa5jj.gcp.mongodb.net/rfm?retryWrites=true&w=majority',
   {useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => {
    console.log('Connected to db');
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  })

  