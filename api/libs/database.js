const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('config').database;

const sequelize = new Sequelize(config.name, config.username, config.password, {
	dialect: 'postgres',
	host: config.host,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	dialectOptions: {
		socketPath: config.host
	},
	logging: false,
	operatorsAliases: false
});

const db = { Sequelize, sequelize };

const onlyModels = file => {
	// eslint-disable-next-line no-process-env
	if (process.env.NODE_ENV === 'testing') {
		return file.slice(-7) === 'mock.js';
	}
	return file.indexOf('.') !== 0 && file.slice(-7) !== 'test.js' && file.slice(-7) !== 'mock.js';
};

const importModel = file => {
	const modelPath = path.join(__dirname, '../models', file);
	const model = sequelize.import(modelPath);
	db[model.name] = model;
};

const associate = modelName => {
	if (typeof db[modelName].associate === 'function') db[modelName].associate(db);
};

const modelsDir = path.resolve(__dirname, '../models/');
// eslint-disable-next-line no-sync
fs.readdirSync(modelsDir)
	.filter(onlyModels)
	.forEach(importModel);

Object.keys(db).forEach(associate);

module.exports = db;
