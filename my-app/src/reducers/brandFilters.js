import lodash from 'lodash';

const initialState = [  {type: 'kits', brand: 'eleaf', inuse: false, disabled: false},
                        {type: 'kits', brand: 'innokin', inuse: false, disabled: false},
                        {type: 'kits', brand: 'kangertech', inuse: false, disabled: false}, 
                        {type: 'kits', brand: 'smok', inuse: false, disabled: false},
                        {type: 'kits', brand: 'vaporesso', inuse: false, disabled: false},
                        {type: 'tanks', brand: 'smok', inuse: false, disabled: false},
                        {type: 'tanks', brand: 'aspire', inuse: false, disabled: false},
                        {type: 'tanks', brand: 'uwell', inuse: false, disabled: false},
                        {type: 'coils', brand: 'aspire', inuse: false, disabled: false},
                        {type: 'coils', brand: 'innokin', inuse: false, disabled: false},
                        {type: 'coils', brand: 'isub', inuse: false, disabled: false},
                        {type: 'coils', brand: 'kangertech', inuse: false, disabled: false},
                        {type: 'coils', brand: 'smok', inuse: false, disabled: false},
                        {type: 'coils', brand: 'vaporesso', inuse: false, disabled: false},
                        {type: 'eliquids', brand: 'monsta vape', inuse: false, disabled: false},
                        {type: 'eliquids', brand: 'mr cloud', inuse: false, disabled: false},
                        {type: 'eliquids', brand: "pick 'n' mix", inuse: false, disabled: false},
                        {type: 'eliquids', brand: 'vado', inuse: false, disabled: false},
                        {type: 'batteries', brand: 'efest', inuse: false, disabled: false},
                        {type: 'batteries', brand: 'samsung', inuse: false, disabled: false}
                    ];      
                            
function changeFilter(stateFilters, filter) {
    let newFilters = stateFilters.slice(0); //makes copy of the part state which is accessible to this reducer ('stateFilters' - the filters array set in state-initialState)
    let correctFilter = lodash.find(newFilters, newFilter => newFilter.brand === filter.brand); //finds filter which satisfies the function-invoked within the newFilters array : find(collection to inspect, the function invoked per iteration)
    correctFilter.inuse = !correctFilter.inuse; //changes it to opposite boolean of what it currently is
    for (var i=0; i<newFilters.length; i++) {
        if (newFilters[i].brand !== filter.brand) {
            newFilters[i].disabled = !newFilters[i].disabled;
        }
    }; //this for loop changes all non-selected filters' 'disabled' properties, to true (disables all other filters)
    return newFilters; //returns new altered state
    
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_BRAND_FILTER":
            return changeFilter(state, action.filter) //called on current state which then returns new altered state, see above
        default:
            return state;
    }
    return state;
};