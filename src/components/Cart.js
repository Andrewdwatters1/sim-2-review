import React, {Component} from 'react'
import axios from 'axios'

class Cart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }

    removeFromCart = (id) => {
        axios.delete(`/api/cart/${id}`).then(results => {
            this.props.updateCart(results.data)
        })
    }

    render() {
        let total = 0
        let cart = this.props.cart.map(item => {
            total += (item.price * item.quantity)
            return (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => this.removeFromCart(item.id)}>Delete</button>
                </div>
            )
        })
        total = this.round(total, 2)
        return(
            <div>
                {cart}
                <br />
                <p>Total: ${total}</p>
            </div>
        )
    }
}

export default Cart