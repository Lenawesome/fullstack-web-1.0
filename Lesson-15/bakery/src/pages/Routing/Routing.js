import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Category from '../Category/Category';
import App from '../App/App';
import { Route, BrowserRouter as Router, Switch, useRouteMatch, useParams } from "react-router-dom";

export default class Routing extends React.Component {
    state = {
        products: []
    }

    async componentDidMount() {
        // const categoryResponse = await get('/categories');
        // this.setState({
        //   products: categoryResponse
        // });

    }

    render() {
        return <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={App} />
                    <Route exact path="/category/:categoryID" component={Category} />
                </Switch>
                <Footer />
            </div>
        </Router>
    }
}