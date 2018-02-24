import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import products from './products';
import kitsBrandFilters from './kitsBrandFilters';
import kitsPriceRangeFilters from './kitsPriceRangeFilters';
import overviews from './overviews';
import basketProducts from './basketProducts';
import {alert} from './alert.reducer';
import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';


const reducers = combineReducers({
    products: products,
    kitsBrandFilters: kitsBrandFilters,
    kitsPriceRangeFilters: kitsPriceRangeFilters,
    basketProducts: basketProducts,
    overviews: overviews,

    alert: alert,
    authentication: authentication,
    registration: registration,
    users: users,

    router: routerReducer
});

export default reducers;