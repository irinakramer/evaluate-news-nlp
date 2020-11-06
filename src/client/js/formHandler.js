// Global variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`${baseURL}&lang=en&&url=https://www.irinakramer.com/&key=${process.env.API_KEY}`)
        // fetch('https://api.meaningcloud.com/sentiment-2.1?lang=en&url=https://www.irinakramer.com/&key=e1617453989c1db9d916264d3a7183ac')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.status.msg;
            console.log(res);
        })
    // fetch('http://api.openweathermap.org/data/2.5/weather?zip=94952&appid=a7b0030ca841d3b538769612e7833ce6')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.main.temp;
    //         console.log(res);
    //     })
    // fetch('http://localhost:8081/test')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
}

export { handleSubmit }
