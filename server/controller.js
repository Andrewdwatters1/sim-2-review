let products = require('./products')
let cart = []

module.exports = {
    getProducts: (req, res) => {
        res.status(200).send(products)
    },
    getCart: (req, res) => {
        res.status(200).send(cart)
    },
    addToCart: (req, res) => {
        let {product} = req.body
        let index = cart.findIndex(item => item.id === product.id)
        if(index === -1) {
            product.quantity = 1
            cart.push(product)
        } else {
            cart[index].quantity++
        }
        res.status(200).send(cart)
    },
    updateQuantity: (req, res) => {
        let {id} = req.params
        let {update} = req.query
        let index = cart.findIndex(item => item.id === +id)
        if(index !== -1) {
            if(update === 'up'){
                cart[index].quantity++
            } else {
                cart[index].quantity--
            }
        }
        res.status(200).send(cart)
    },
    deleteFromCart: (req, res) => {
        let {id} = req.params
        let index = cart.findIndex(item => item.id === +id)
        if(index !== -1) {
            cart.splice(index, 1)
        }
        res.status(200).send(cart)
    },
    checkout: (req, res) => {
        cart = []
        res.status(200).send(cart)
    }
}