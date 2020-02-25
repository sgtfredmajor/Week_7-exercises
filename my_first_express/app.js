const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running in port 3333');
});

app.get('/', (request, response) => { 
    const snippit = `<h1> Yo, you are awesome!</h1>`;
    response
        .status(200)
        .send(snippit)
        .end();
});