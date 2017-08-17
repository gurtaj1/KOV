import lodash from 'lodash';

const initialState = [];      
                            
function addProduct(stateProducts, product) {
    let newProducts = stateProducts.slice(0);
    if (lodash.find(newProducts, stateProduct => stateProduct.id === product.id) === undefined) {
        newProducts.push(product);
    } else {
        for (var i=0; i<newProducts.length; i++) {
            if (newProducts[i].id === product.id) {
            newProducts[i].qty++
            } 
        }
    }
    return newProducts;
}

function removeProduct(stateProducts, product) {
    let newProducts = stateProducts.slice(0);
    for (var i=0; i<newProducts.length; i++) {
        if (newProducts[i].id === product.id) {
            if (newProducts[i].qty === 1) {
                newProducts = lodash.filter(newProducts, stateProduct => stateProduct.id !== newProducts[i].id)
            } else {
                newProducts[i].qty--
            }
        } 
    }
    return newProducts;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return addProduct(state, action.product) //called on current state which then returns new altered state, see above
        case "REMOVE_FROM_BASKET":
            return removeProduct(state, action.product)
        default:
            return state;
    }
    return state;
};