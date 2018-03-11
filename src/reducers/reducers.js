import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import products from './products';
import brandFilters from './brandFilters';
import priceRangeFilters from './priceRangeFilters';
import overviews from './overviews';
import basketProducts from './basketProducts';


const reducers = combineReducers({
    products: products,
    brandFilters: brandFilters,
    priceRangeFilters: priceRangeFilters,
    basketProducts: basketProducts,
    overviews: overviews,

    router: routerReducer
});

export default reducers;