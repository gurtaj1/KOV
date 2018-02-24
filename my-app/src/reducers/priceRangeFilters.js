import lodash from 'lodash';

const initialState = [ {type: 'kits', priceRange: '£0-£20', inuse: false, disabled: false},
                       {type: 'kits', priceRange: '£20-£40', inuse: false, disabled: false},
                       {type: 'kits', priceRange: '£40-£60', inuse: false, disabled: false},
                       {type: 'tanks', priceRange: '£10-£20', inuse: false, disabled: false},
                       {type: 'tanks', priceRange: '£20-£30', inuse: false, disabled: false},
                       {type: 'coils', priceRange: '£0-£5', inuse: false, disabled: false},
                       {type: 'coils', priceRange: '£5-£10', inuse: false, disabled: false},
                       {type: 'coils', priceRange: '£10-£15', inuse: false, disabled: false},
                       {type: 'eliquids', priceRange: '£0-£5', inuse: false, disabled: false},
                       {type: 'eliquids', priceRange: '£5-£10', inuse: false, disabled: false},
                       {type: 'eliquids', priceRange: '£10-£15', inuse: false, disabled: false},
                       {type: 'batteries', priceRange: '£0-£5', inuse: false, disabled: false},
                       {type: 'batteries', priceRange: '£5-£10', inuse: false, disabled: false}
                    ];    
                            
function changeFilter(stateFilters, filter) {
    let newFilters = stateFilters.slice(0); //makes copy of the part state which is accessible to this reducer ('stateFilters' - the filters array set in state-initialState)
    let correctFilter = lodash.find(newFilters, stateFilter => stateFilter.priceRange === filter.priceRange); //finds filter which satisfies the function-invoked within the newFilters array : find(collection to inspect, the function invoked per iteration)
    correctFilter.inuse = !correctFilter.inuse; //changes it to opposite boolean of what it currently is
    for (var i=0; i<newFilters.length; i++) {
        if (newFilters[i].priceRange !== filter.priceRange) {
            newFilters[i].disabled = !newFilters[i].disabled;
        }
    }; //this for loop changes all non-selected filters' 'disabled' properties, to true (disables all other filters)
    return newFilters; //returns new altered state
    
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_PRICE_FILTER":
            return changeFilter(state, action.filter) //called on current state which then returns new altered state, see above
        default:
            return state;
    }
    return state;
};