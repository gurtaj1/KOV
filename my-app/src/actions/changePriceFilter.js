//change filter
const changePriceFilter = (filter) => {
    return {
        type: 'CHANGE_PRICE_FILTER',
        filter
    }
}

export default changePriceFilter;