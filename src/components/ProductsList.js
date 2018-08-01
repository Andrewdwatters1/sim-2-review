import React from 'react'
import Product from './Product'

function ProductsList(props) {
    let productsList = props.productsList.map(product => {
        return (
            <Product 
                product={product} 
                key={product.id}
                updateCart={props.updateCart} />
        )
      })
      return(
          <div>
              {productsList}
          </div>
      )
}

export default ProductsList