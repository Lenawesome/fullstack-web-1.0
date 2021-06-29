import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from './components/Banner';
import FeatureProduct from './components/FeatureProduct';
import { get } from '../../services/http';

export default class App extends React.Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const productResponse = await get('/products?limit=6');
    this.setState({
      products: productResponse.data
    });
  }

  render () {
    return <div>
      <main className="home-page-content">
        <Banner />
        <FeatureProduct products={this.state.products}/>
      </main>
    </div>
  }
}