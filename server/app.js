import express from 'express';
import router from './router.js';

export const app = express();
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/View'));

/**
 * parses text as url encoded data and exposes resulting object)
 */
 
app.use(bodyParser.urlencoded({
    extended: true
}));

//parses the text as JSON and exposes result on req.body
app.use(bodyParser.json());

app.use(router);