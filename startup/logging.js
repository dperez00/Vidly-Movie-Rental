const winston = require("winston");
const config = require("config");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.File({ filename: "uncaughtExceptions.log"}));

    winston.rejections.handle(
        new winston.transports.File({ filename: "unhandledRejections.log" }));

    winston.add(new winston.transports.File({ filename: "logfile.log" }));
    winston.add(new winston.transports.MongoDB({
        db: config.get("db"),
        level: "info",
    }));
    winston.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
};