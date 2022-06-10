require('dotenv').config();
const app = require('./app');

const {recipesBook} = require('./db/models');
const {Client} = require('./db/models');
const {Recipes} = require('./db/models');
const {People} = require('./db/models');
const {Ingredients} = require('./db/models');


async function main() {
    await app.listen(app.get('port'));
    console.log('Server en puerto',app.get('port'));
}

app.get('/', function(req,res) {
    res.send('prueba');
  });

  app.get('/recipesBook', async function (req,res){
    return res.send(await recipesBook.findAll())
  }); 

  
  app.get('/ingredients', async function (req,res) {
    const resul = {}
    await ingredients.forEach(function (ingredient) {
      resul.push(ingredient)
    })
    return res.send(resul)
  });
  
  app.get('/ingredients/:ingredientId/', async function (req,res) {
    let ingredient = await ingredients.find(ingredient => ingredient.ingredientId=req.params)
    return res.send(ingredient)
  })
  
  app.get('/people', async function(req,res) {
    const resulPeople = {}
    await people.forEach(function(people) {
      resulPeople.push(people)
    })
    return res.send(resulPeople)
  })
  
  app.get('/people/:peopleId/', async function (req, res) {
    let people = await people.find(people => people.peopleId = req.params)
    return res.send(people)
  })
  
  app.get('/clients', async function (req, res) {
    const resulClients = {}
    await clients.forEach(function(client) {
      resulClients.push(client)
    })
    return res.send(resulClients)
  })
  
  app.get('/clients/:peopleId/', async function(req,res){
    let client = await client.find(client => client.peopleId = req.params)
    return res.send(client)
  })
  
  app.get('/recipes', async function (req,res){
    const resulRecipes = {}
    await recipes.forEach(function(recipe){
      resulRecipes.push(recipe)
    })
    return res.send(resulRecipes)
  })
  
  app.get('/recipes/:recipeId', async function(req,res) {
    let recipe = await recipes.find(recipes => recipes.recipeId = req.params)
    return res.send(recipe)
  })
  
  
  
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
  

main();

