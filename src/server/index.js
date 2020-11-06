const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');


const app = express();

app.use(express.static('dist'));
app.use(cors());

// Middleware
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// body-parser is a middleware used for parsing the body from the request object during POST calls made to the server. Now your backend service will accept POST request with text in the request body.
app.use(bodyParser.text());

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const port = 8081;

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

// test api
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// POST method
app.post('/article', async (req, res) => {
    const response = await fetch(`${baseURL}&key=${API_KEY}&lang=auto&url=${req.body}`);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
});



console.log(`Your API key is ${process.env.API_KEY}`);
