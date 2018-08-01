import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

class App extends Component {
  constructor() {
    super()
    this.state={
      productsList: [],
      cart: []
    }
  }

  componentDidMount() {
    axios.get('/api/products').then(results => {
      let productsList = results.data
      axios.get('/api/cart').then(res => {
        let cart = res.data
        this.setState({productsList, cart})
      })
    })
  }

  updateCart = (cart) => {
    this.setState({cart})
  }

  render() {
   
    return (
      <div>
        <h3>Products</h3>
        <ProductsList 
          productsList={this.state.productsList}
          addProductToCart={this.addProductToCart}
          updateCart={this.updateCart} />
          <br/>
          <h3>Cart</h3>
          <Cart 
            cart={this.state.cart}
            updateCart={this.updateCart} />
      </div>
    );
  }
}

export default App;
