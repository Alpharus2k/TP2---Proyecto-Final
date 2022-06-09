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
const { notEqual } = require('assert');
const PORT = 5000

app.get('/', function(req,res) {
  res.send('');
});

app.getRecipeBook('/recipesBook', async function (req,res){
  let recipeBook = await recipesBook.find()
  return res.send(recipeBook)
});

app.getAllIngredients('/ingredients', async function (req,res) {
  const resul = {}
  await ingredients.forEach(function (ingredient) {
    resul.push(ingredient)
  })
  return res.send(resul)
});

app.getIngredientById('/ingredients/:ingredientId/', async function (req,res) {
  let ingredient = await ingredients.find(ingredient => ingredient.ingredientId=req.params)
  return res.send(ingredient)
})

app.getAllPeople('/people', async function(req,res) {
  const resulPeople = {}
  await people.forEach(function(people) {
    resulPeople.push(people)
  })
  return res.send(resulPeople)
})

app.getPeopleById('/people/:peopleId/', async function (req, res) {
  let people = await people.find(people => people.peopleId = req.params)
  return res.send(people)
})

app.getAllClients('/clients', async function (req, res) {
  const resulClients = {}
  await clients.forEach(function(client) {
    resulClients.push(client)
  })
  return res.send(resulClients)
})

app.getClientById('/clients/:peopleId/', async function(req,res){
  let client = await client.find(client => client.peopleId = req.params)
  return res.send(client)
})

app.getAllRecipes('/recipes', async function (req,res){
  const resulRecipes = {}
  await recipes.forEach(function(recipe){
    resulRecipes.push(recipe)
  })
  return res.send(resulRecipes)
})

app.getRecipeById('/recipes/:recipeId', async function(req,res) {
  let recipe = await recipes.find(recipes => recipes.recipeId = req.params)
  return res.send(recipe)
})

app.listen(PORT);

app.post('/recipeBook', async function (req,res) {
  await recipesBook.create ({
    perProducedUnit: req.body.perProducedUnit
  })
  res.status(201).send({})
})

app.post('/recipes', async function (req, res) {
  await recipes.create ({
    name: req.body.name,
    description: req.body.description
  })
  res.status(201).send({})
})

app.post('/ingredients', async function (req,res) {
  await ingredients.create ({
    name: req.body.name
  })
  res.status(201).send({}) 
})

app.post('/people', async function (req, res) {
  await people.create({
    name: req.body.name,
    email: req.body,email
  })
  res.status(201).send({})
})

app.post('/clients', async function (req, res) {
  await clients.create ({
    timeAvailability: req.body.timeAvailability,
    note: req.body.note
  })
  res.status(201).send({})
})

app.listen(PORT);

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