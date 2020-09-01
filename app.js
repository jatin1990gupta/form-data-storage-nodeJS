const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', userRoutes);
app.use(errorController.get404);

mongoose.connect('mongodb://localhost/task', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => {
    console.log('Connected to db');
    app.listen(3000, () => {
      console.log('Server started at port 3000!');
    });
  })
  .catch(err => {
    console.log(err);
  })

  