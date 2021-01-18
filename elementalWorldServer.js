const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const { error } = require('console');

import models, { connectDb } from './models/index';

try{
  require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
}
catch(error)
{
  console.log(error);
}

const router = express.Router();


const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const syncUserPermissions = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const retrieveObjectData = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

function backendSyncLoop(){
  //Ensures that all actions have been performed before repeating the loop.
  Promise.all([syncUserPermissions, retrieveObjectData]).then((values) => {
      console.log(values);
  });
}

app.get('/objectInput', function(req, res) {
  //
  userObj = (req.query).user;
  inputObj = (req.query).input;

  res.json(
      {
          'success':true
      }
  );
})

app.listen(3000, () => console.log('Server ready'))