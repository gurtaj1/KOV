import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import App from './App';
import './index.css';

import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers/reducers';

const history = createHistory();
const routeHistoryMiddleware = routerMiddleware(history); //this will allow us to programmatically (manualy) chang the url, from anywhere in the app

const store = createStore(reducers, composeWithDevTools(applyMiddleware(routeHistoryMiddleware, thunk)));

ReactDOM.render(<Provider store={store}>
                    <ConnectedRouter history={history}>
                        <App/>
                    </ConnectedRouter >
                </Provider>,
document.getElementById('root')
);