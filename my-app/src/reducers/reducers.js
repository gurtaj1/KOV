import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import kitsProducts from './kitsProducts';
import kitsBrandFilters from './kitsBrandFilters';
import kitsPriceRangeFilters from './kitsPriceRangeFilters';
import basketProducts from './basketProducts';


const reducers = combineReducers({
    kitsProducts: kitsProducts,
    kitsBrandFilters: kitsBrandFilters,
    kitsPriceRangeFilters: kitsPriceRangeFilters,
    basketProducts: basketProducts,
    router: routerReducer
});

export default reducers;