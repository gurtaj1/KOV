import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';

import TanksPage from './components/TanksPage';
import CoilsPage from './components/CoilsPage';
import ELiquidsPage from './components/ELiquidsPage';
import BatteriesPage from './components/BatteriesPage';

import {KitsPageContainer} from './components/KitsPageContainer';
import {BasketContainer} from './components/BasketContainer';

import {KitProductPageContainer} from './components/KitProductPageContainer';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/kits" component={KitsPageContainer} />
                    <Route exact path="/kitproducts/:productid" component={KitProductPageContainer} />} />
                    <Route path="/tanks" component={TanksPage} />
                    <Route path="/coils" component={CoilsPage} />
                    <Route path="/eliquids" component={ELiquidsPage} />
                    <Route path="/batteries" component={BatteriesPage} />
                    <Route path="/basket" component={BasketContainer} />
                </Switch>
            </main>
        )
    }
};

export default Main;