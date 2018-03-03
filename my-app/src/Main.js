import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';

import {ProductsPageContainer} from './components/ProductsPageContainer';
import {BasketContainer} from './components/BasketContainer';

import {ProductPageContainer} from './components/ProductPageContainer';
import {SearchResultsContainer} from './components/SearchResultsContainer';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>      {/*switch returns only the first matching route rather than all matching routes*/}
                    <Route exact path="/" component={Home}/>
                    <Route path="/searchresults/:query" component={SearchResultsContainer} />
                    <Route path="/searchresults/" component={SearchResultsContainer} />       {/*added this route in case search is submitted without entering anything*/}
                    <Route path="/products/:type" component={ProductsPageContainer} />
                    <Route path="/:type/:productid" component={ProductPageContainer} />
                    <Route path="/basket" component={BasketContainer} />
                </Switch>
            </main>
        )
    }
};

export default Main;