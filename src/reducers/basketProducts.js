const initialState = [];      
                            
function addProduct(stateProducts, product) {
    let newBasketProducts = stateProducts.slice(0);
    let alreadyInBasket;
    for (var i=0; i<newBasketProducts.length; i++) {
        if (newBasketProducts[i].id === product.id) { //if the product which action was called on is found in the current state make the undefined variable now equal to the current product and up the quantity of the basket product by one.
            alreadyInBasket = true;
            newBasketProducts[i].qty++
        } 
    }
    if (alreadyInBasket === undefined) {               //if product was not found in the current state
        newBasketProducts.push(product);
    } 
    return newBasketProducts;
}

function removeProduct(stateProducts, product) {
    let newBasketProducts = stateProducts.slice(0);
    let innerLoopFunc = function(productsArray, index) {
        return productsArray.filter(product => product.id !== productsArray[index].id); //note comment below did not actually avert the warning for no-loop-func being made in browser, on code loading, meaning problem was not yet solved. so have now declared this function outside of the loop completely.
    }
    for (let i=0; i<newBasketProducts.length; i++) { //used 'let i' rather than 'var i'. did this to avert the no-loop-func requirement which essantially means you cannot have a function in a loop as it tends to result in errors. this did not actually solve the isse but taking the function outside of the loop (above) did. see https://eslint.org/docs/rules/no-loop-func
        if (newBasketProducts[i].id === product.id) {
            if (newBasketProducts[i].qty === 1) {
                newBasketProducts = innerLoopFunc(newBasketProducts, i);
            } else {
                newBasketProducts[i].qty--
            }
        } 
    }
    return newBasketProducts;
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
};