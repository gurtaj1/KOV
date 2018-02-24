import lodash from 'lodash';

const initialState = [  {associate: 'kits', brand: 'eleaf', inuse: false, disabled: false},
                        {associate: 'kits', brand: 'innokin', inuse: false, disabled: false},
                        {associate: 'kits', brand: 'kangertech', inuse: false, disabled: false}, 
                        {associate: 'kits', brand: 'smok', inuse: false, disabled: false},
                        {associate: 'kits', brand: 'vaporesso', inuse: false, disabled: false},
                        {associate: 'kits', brand: 'vpark', inuse: false, disabled: false}      ];      
                            
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