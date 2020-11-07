import { text } from 'body-parser'

const fetch = require('node-fetch')

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

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
}

/* Function to Update UI */
const updateUI = async (res) => {
    // find DOM elements
    const resultsEl = document.getElementById('results');
    const urlEl = document.getElementById('url');
    const scoreEl = document.getElementById('score');
    const subjectivityEl = document.getElementById('subjectivity');
    const ironyEl = document.getElementById('irony');
    const textEl = document.getElementById('text');

    // insert API results
    resultsEl.innerHTML = `API Status: ${res.status.msg}`;
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
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

export { handleSubmit }
