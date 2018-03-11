const initialState = [ {type: 'kits', priceRange: 'ALL', inuse: true},
                       {type: 'kits', priceRange: '£0-£20', inuse: false},
                       {type: 'kits', priceRange: '£20-£40', inuse: false},
                       {type: 'kits', priceRange: '£40-£60', inuse: false},
                       {type: 'tanks', priceRange: 'ALL', inuse: true},
                       {type: 'tanks', priceRange: '£10-£20', inuse: false},
                       {type: 'tanks', priceRange: '£20-£30', inuse: false},
                       {type: 'coils', priceRange: 'ALL', inuse: true},
                       {type: 'coils', priceRange: '£0-£5', inuse: false},
                       {type: 'coils', priceRange: '£5-£10', inuse: false},
                       {type: 'coils', priceRange: '£10-£15', inuse: false},
                       {type: 'eliquids', priceRange: 'ALL', inuse: true},
                       {type: 'eliquids', priceRange: '£0-£5', inuse: false},
                       {type: 'eliquids', priceRange: '£5-£10', inuse: false},
                       {type: 'eliquids', priceRange: '£10-£15', inuse: false},
                       {type: 'batteries', priceRange: 'ALL', inuse: true},
                       {type: 'batteries', priceRange: '£0-£5', inuse: false},
                       {type: 'batteries', priceRange: '£5-£10', inuse: false}
                    ];    
                            
function changeFilter(stateFilters, filter) {
    let newFilters = stateFilters.slice(0); //makes copy of the part state which is accessible to this reducer ('stateFilters' - the filters array set in state-initialState)
    for (var i=0; i<newFilters.length; i++) {
        if (newFilters[i].priceRange === filter.priceRange && newFilters[i].type === filter.type) {
            newFilters[i].inuse = true
        } else if (newFilters[i].type === filter.type) {
            newFilters[i].inuse = false;
        }
    }
    return newFilters; //returns new altered state
    
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_PRICE_FILTER":
            return changeFilter(state, action.filter) //called on current state which then returns new altered state, see above
        default:
            return state;
    }
};