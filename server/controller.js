let products = require('./products')

module.exports = {
    getProducts: (req, res) => {
        res.status(200).send(products)
    }
}