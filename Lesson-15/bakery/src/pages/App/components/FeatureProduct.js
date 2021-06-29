import React from 'react';
import ProductItem from './ProductItem';

export default class FeatureProduct extends React.Component {

  state = {
    message: 'Hello'
  }

  render () {
    return <div className="feature-product">
      <h3>Featured Products</h3>
      <div className="product-container">
        {
          this.props.products.map(product => <ProductItem product={product} key={product._id}/>)
        }
      </div>
    </div>;
  }
}