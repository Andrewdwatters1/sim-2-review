import React, {Component} from 'react'
import axios from 'axios'

class Product extends Component {

    addProductToCart = (product) => {
        axios.post('/api/cart', {product}).then(results => {
            this.props.updateCart(results.data)
        })
      }
    render() {
        let {product} = this.props
        return (
            <div key={product.id}>
            <h4>{product.name}</h4>
            <button onClick={() => this.addProductToCart(product)}>Add To Cart</button>
            </div>
        )
    }
}

export default Product