var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var appconfig = require("./config/appconfig");
var morgan = require('morgan');
var fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()
const { uuid } = require("uuidv4");
const morganBody = require('morgan-body');
// const winston = require('winston');
// require('winston-mongodb');

const logger = require('./common/log');

const loggerStream = {
  write: message => {
    logger.info(message);
  },
};

app.use(bodyParser.json());

app.use(assignid);

morganBody(app,{stream:loggerStream,prettify:false,includeNewLine:false,noColors:true});

function assignid(req, res, next) {
  req.id = uuid();
  next();
}

  mongoose.connect(
    process.env.MONGO_AURL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
      if (err) console.log(err);
      else console.log(`Database connected`);
    }
  );
  



app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
      next();
}); 

require('./app/Routes')(app,console);

app.listen(appconfig.apiport, () => {
    console.log('server running at the port', appconfig.apiport);
})
