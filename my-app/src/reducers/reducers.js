import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import products from './products';
import brandFilters from './brandFilters';
import priceRangeFilters from './priceRangeFilters';
import overviews from './overviews';
import basketProducts from './basketProducts';
import {alert} from './alert.reducer';
import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';


const reducers = combineReducers({
    products: products,
    brandFilters: brandFilters,
    priceRangeFilters: priceRangeFilters,
    basketProducts: basketProducts,
    overviews: overviews,

    alert: alert,
    authentication: authentication,
    registration: registration,
    users: users,

    router: routerReducer
});

export default reducers;