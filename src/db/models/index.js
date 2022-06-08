'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.json')[env];
const db = {};
const express = require('express');
const app = express();
const {recipesBook} = require('./src/db/models');
const {clients} = require('./src/db/models');
const {recipes} = require('./src/db/models');
const {people} = require('./src/db/models');
const {ingredients} = require('./src/db/models');

app.get('/', function(req,res) {
  res.send('');
});

app.get('/recipesBook', async function (req,res){
  let recipeBook = await recipesBook.find()
  return res.send(recipeBook)
})

app.getAllIngredients('/ingredients', async function (req,res) {
  const resul = {}
  await ingredients.forEach(function (ingredient) {
    resul.push(ingredient)
  })
  return res.send(resul)
})

app.listen(5000);

app.post('/recipeBook', async function (req,res) {
  await recipeBook.create ({
    recipeId: req.body.recipeId,
    ingredientId: req.body.ingredientId,
    perProducedUnit: req.body.perProducedUnit
  })
  res.status(201).send({})
})

app.listen(5000);

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;