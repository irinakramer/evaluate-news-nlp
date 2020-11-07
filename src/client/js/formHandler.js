import { text } from 'body-parser';

const fetch = require('node-fetch');

/* Global variables */
const errorEl = document.getElementById('error');

/* Function to handle submit data and retrieve API data */
async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
    // check what text was put into the form field
    console.log(Client.checkForUrl(formText));

    if (Client.checkForUrl(formText)) {
        await fetch('http://localhost:8081/article', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: formText,
        })
            .then(res => res.json())
            .then(res => {
                updateUI(res);
                console.log('res ui: ', res);
            })

    } else {
        errorEl.innerHTML = 'Invalid URL. Please make sure the URL starts with http:// or https:// and has no spaces.'
        console.log('invalid url');
    }



}

/* Function to Update UI */
const updateUI = (res) => {
    // find DOM elements
    const resultsEl = document.getElementById('results');
    const urlEl = document.getElementById('url');
    const scoreEl = document.getElementById('score');
    const subjectivityEl = document.getElementById('subjectivity');
    const ironyEl = document.getElementById('irony');
    const textEl = document.getElementById('text');

    // clear error msg
    errorEl.innerHTML = '';

    // insert API results
    resultsEl.innerHTML = `API Status: ${capitalizeFirstLetter(res.status.msg)}`;
    urlEl.innerHTML = `URL: ${document.getElementById('name').value}`;
    scoreEl.innerHTML = `Sentiment Score: ${scoreValue(res.score_tag)}`;
    subjectivityEl.innerHTML = `Subjectivity: ${capitalizeFirstLetter(res.subjectivity)}`;
    ironyEl.innerHTML = `Irony: ${capitalizeFirstLetter(res.irony)}`;
    textEl.innerHTML = `Text: ${res.sentence_list[0].text}`;
}

/* Function to describe score values */
function scoreValue(score) {
    switch (score) {
        case "P+":
            return "Strong positive";
        case "P":
            return "Positive";
        case "NEU":
            return "Neutral";
        case "N":
            return "Negative";
        case "N+":
            return "Strong negative";
        case "NONE":
            return "Without sentiment";
        default:
            return "No data";
    }
}

/* Function to capitalize first letter of string */
function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { handleSubmit }
