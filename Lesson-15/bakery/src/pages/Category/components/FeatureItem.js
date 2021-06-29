import React from 'react';
import CategoryItem from './CategoryItem';

export default class FeatureItem extends React.Component {

  state = {
    message: 'Hello'
  }

  render () {
    return <div className="feature-product">
      <h3>Featured Products</h3>
      <div className="product-container">
        {
          this.props.products.map(product => <CategoryItem product={product} key={product._id}/>)
        }
      </div>
    </div>;
  }
}