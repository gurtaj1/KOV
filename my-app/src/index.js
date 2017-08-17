import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reducers from './reducers/reducers';

import './index.css';

const history = createHistory();
const routeHistoryMiddleware = routerMiddleware(history);

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(routeHistoryMiddleware, thunk)));

ReactDOM.render(<BrowserRouter history={history}>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>,
document.getElementById('root')
);