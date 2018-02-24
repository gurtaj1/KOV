import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';

import {ProductsPageContainer} from './components/ProductsPageContainer';
import {BasketContainer} from './components/BasketContainer';

import {ProductPageContainer} from './components/ProductPageContainer';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/products/:type" component={ProductsPageContainer} />
                    <Route path="/:type/:productid" component={ProductPageContainer} />} />
                    <Route path="/basket" component={BasketContainer} />
                </Switch>
            </main>
        )
    }
};

export default Main;