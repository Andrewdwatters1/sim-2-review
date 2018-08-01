require('dotenv').config()


const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')


const app = express();

const { SERVER_PORT} = process.env

app.use(bodyParser.json())

app.get('/api/products', controller.getProducts)

app.get('/api/cart', controller.getCart)
app.post('/api/cart', controller.addToCart)
app.put('/api/cart/:id', controller.updateQuantity)
app.delete('/api/cart/:id', controller.deleteFromCart)

app.listen(SERVER_PORT, () => console.log('You are who you chose to be', SERVER_PORT))
