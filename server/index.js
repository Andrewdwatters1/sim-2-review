require('dotenv').config()


const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')


const app = express();

const { SERVER_PORT} = process.env

app.use(bodyParser.json())

app.get('/api/products', controller.getProducts)

app.listen(SERVER_PORT, () => console.log('You are who you chose to be', SERVER_PORT))
