const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
	response.get('mainpage.html')
})

app.get('/weather', (request, response) => {
	response.get('weather.html')
})

app.get('/picture', (request, response) =>{
	response.get('picture.html')
})

app.listen(port, () => {
	console.log(`Server is up on the port ${port}`);
});