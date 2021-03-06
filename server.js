const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');
require('dotenv').config();

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');

const db = knex({
  client: 'pg',
  //heroku deployment
/*  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl:true
  }*/
  //localhost
/*  connection: {
    host: '127.0.0.1',
    user: 'meiling',
    password: '',
    database: 'face-rec'
  }*/
  //docker
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  }
});

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('It is working');
});

app.post('/signin', (req, res) => {
  signin.signinAuthentication(req,res,db, bcrypt)
});

app.post('/register',(req, res) => {
  register.handleRegister(req, res, db, bcrypt)
});

app.get('/profile/:id',  auth.requireAuth, (req, res) => {
  profile.handleProfileGet(req, res, db)
});

app.post('/profile/:id',  auth.requireAuth, (req, res) => {
  profile.handleProfileUpdate(req, res, db)
});

app.put('/image', auth.requireAuth, (req, res) => {
  image.handleImage(req, res, db)
});

app.post('/imageurl', auth.requireAuth,  (req, res) => {
  image.handleApiCall(req, res)
});

const PORT = process.env.PORT || process.env.PORT_LOCAL;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
