const request = require('request-promise');


const options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    uri: 'https://192.168.0.11:8088/api/v1.0.5/login',
    body: {
       username: 'api',
       password: 'e128e52161d7995ecefe928add803a71' //md5 encrypt
    },
    json: true,
    strictSSL: false
    // Тело запроса приводится к формату JSON автоматически
}
request(options)
    .then(function (response) {
            console.log(response);
    })
    .catch(function (err) {
        console.log({err})
    })


setInterval(function () {
request(options)
    .then(function (response) {
            console.log(response);
    })
    .catch(function (err) {
        console.log({err})
    })
}, 1800000); //1800000 / 6000 = 30 min