const express = require('express');

const app = express();
app.set('port', process.env.PUERTO);

module.exports = app;