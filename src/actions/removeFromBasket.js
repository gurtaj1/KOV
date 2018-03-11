const removeFromBasket = (product) => {
    return {
        type: 'REMOVE_FROM_BASKET',
        product
    }
}

export default removeFromBasket;