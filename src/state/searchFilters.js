const UPDATE_PRICE = 'searchFilters/UPDATE_PRICE'


export const updatePrice = price => ({
  type: UPDATE_PRICE,
  price
})

const initialState = {
  price: 1,

}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_PRICE:
      return {
        ...state,
        price: action.price
      }
    default:
      return state
  }
}