import React from 'react';
import config from '../../../config';

export default class ProductItem extends React.Component {
  render () {
    return <div className="product-item">
      <img src={`${config.IMAGE_URL}${this.props.product.thumbnail}`}></img>
      <h4>{this.props.product.title}</h4>
      <p>{this.props.product.description}</p>
    </div>
  }
}