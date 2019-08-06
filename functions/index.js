'use strict';
const functions = require('firebase-functions');
const configureServer = require('./server');
const server = configureServer();
const api = functions.region('europe-west1').https.onRequest(server);
module.exports = { api };
