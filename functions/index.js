const functions = require('firebase-functions');
var data = require('./json/amp-list-urls.json');
var express = require('express');
// var app = express();
var cors = require('cors');

// app.use(cors());
// functions.use(cors());

// let app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// let myObj = {
//     first: 'first value',
//     second: 'second value',
// };

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send(data);
// });

// Get data from HN API

// Return data on request

/* Express with CORS */
const app2 = express();
app2.use(cors({ origin: true }));
app2.get('*', (request, response) => {
    response.send(data);
});

// const helloWorld = functions.https.onRequest(app2);

exports.helloWorld = functions.https.onRequest(app2);

// module.exports = {
//     helloWorld,
// };
