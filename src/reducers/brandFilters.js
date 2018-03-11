const initialState = [  {type: 'kits', brand: 'ALL', inuse: true},
                        {type: 'kits', brand: 'eleaf', inuse: false},
                        {type: 'kits', brand: 'innokin', inuse: false},
                        {type: 'kits', brand: 'kangertech', inuse: false}, 
                        {type: 'kits', brand: 'smok', inuse: false},
                        {type: 'kits', brand: 'vaporesso', inuse: false},
                        {type: 'tanks', brand: 'ALL', inuse: true},
                        {type: 'tanks', brand: 'smok', inuse: false},
                        {type: 'tanks', brand: 'aspire', inuse: false},
                        {type: 'tanks', brand: 'uwell', inuse: false},
                        {type: 'coils', brand: 'ALL', inuse: true},
                        {type: 'coils', brand: 'aspire', inuse: false},
                        {type: 'coils', brand: 'innokin', inuse: false},
                        {type: 'coils', brand: 'kangertech', inuse: false},
                        {type: 'coils', brand: 'smok', inuse: false},
                        {type: 'coils', brand: 'vaporesso', inuse: false},
                        {type: 'eliquids', brand: 'ALL', inuse: true},
                        {type: 'eliquids', brand: 'mr cloud', inuse: false},
                        {type: 'eliquids', brand: "pick 'n' mix", inuse: false},
                        {type: 'eliquids', brand: 'vado', inuse: false},
                        {type: 'batteries', brand: 'ALL', inuse: true},
                        {type: 'batteries', brand: 'efest', inuse: false},
                        {type: 'batteries', brand: 'samsung', inuse: false}
                    ];      
                            
function changeFilter(stateFilters, filter) {
    let newFilters = stateFilters.slice(0); //makes copy of the part state which is accessible to this reducer ('stateFilters' - the filters array set in state-initialState) note tht slice does not change the array that calls it (non-mutating)
    for (var i=0; i<newFilters.length; i++) {
        if (newFilters[i].brand === filter.brand && newFilters[i].type === filter.type) {
            newFilters[i].inuse = true
        } else if (newFilters[i].type === filter.type) {
            newFilters[i].inuse = false;
        }
    } //this for loop changes all non-selected, (product-)type matching, filters' 'inuse' properties to false, and changes the filter that was selected to inuse = true. note that we change the filters that matches (product) type ONLY so that we do not change the values of the filters which are displayed on other, product type, routes.
    return newFilters; //returns new altered state
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_BRAND_FILTER":
            return changeFilter(state, action.filter) //called on current state which then returns new altered state, see above
        default:
            return state;
    }
};