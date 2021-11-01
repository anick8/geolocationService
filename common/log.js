const winston = require('winston');
require('winston-mongodb');
require('winston-daily-rotate-file');
const morganBody = require('morgan-body');

const {createLogger, format, transports} =require('winston');
require('winston-mongodb');
const env= require('dotenv');
env.config();


  
const MONGO_URI = process.env.MONGO_AURL;

module.exports = createLogger({
    transports:[

 // File transport
    new transports.File({
    filename: 'logs/winstonLogs.log',
    format:format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )}),
    new transports.MongoDB({
        level:'info',
        db: MONGO_URI,
        options:{
            useUnifiedTopology:true
        },
        collection:'logs',
        format:format.combine(
            format.timestamp(),
            format.json(),
            //format.replaceAll("[-+.^:,]",""),

            //convert logs to a json format for mongodb
            //format.prettyPrint()

                )
    }),
    new transports.Console({
        level:'info',
        collection:'logs',
        format:format.combine(
            format.timestamp(),
            //format.json(),
            //format.replaceAll("[-+.^:,]",""),

            //convert logs to a json format for mongodb
            format.prettyPrint()

                )
    })
    ]
})

