const functions = require('firebase-functions');
var data = require('./../json/amp-list-urls.json');

// let app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

let myObj = {
    first: 'first value',
    second: 'second value',
};

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(data);
});

// Get data from HN API

// Return data on request
