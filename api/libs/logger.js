const path = require('path');
const fs = require('fs');
const winston = require('winston');
const config = require('config').get('logging');

const transports = [];

/**
 * Pretty format logs for logging to console during development.
 */
const alignedWithColorsAndTimeFormater = winston.format.combine(
	winston.format.colorize(),
	winston.format.timestamp(),
	winston.format.align()
);

if (config.console.isEnabled) {
	transports.push(
		new winston.transports.Console({
			level: config.get('level'),
			format: alignedWithColorsAndTimeFormater
		})
	);
}

const logger = winston.createLogger({
	transports,
	exitOnErrors: false
});

module.exports = logger;
