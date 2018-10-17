const request = require('request-promise');


const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    uri: 'myUrlForEmmas',
    body: {
        username: '',
        password: ''
    },
    json: true,
    strictSSL: false
    // Тело запроса приводится к формату JSON автоматически
}


request(options)
.then(function (response) {
    //Data , which i need to parse, after response , from API side;
})
.catch(function (err) {
    console.log({
        err
    })
})