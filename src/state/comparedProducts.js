const TOGGLE = 'comparedProduct/TOGGLE'


export const toggle = productName => ({
  type: TOGGLE,
  productName
})


const initialState = {
  ComparedProductNames: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        ComparedProductNames: state.ComparedProductNames.includes(action.productName) ?
          state.ComparedProductNames.filter(
          productName => action.productName !== productName
        ) :
          state.ComparedProductNames.concat(action.productName)
      }
    default:
      return state
  }
}