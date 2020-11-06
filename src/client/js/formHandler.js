// Global variables

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    await fetch('http://localhost:8081/article', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: formText
    })
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.status.msg;
            console.log(res);
        })
}

export { handleSubmit }
