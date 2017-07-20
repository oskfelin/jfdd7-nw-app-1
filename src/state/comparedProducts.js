const ADD = 'comparedProduct/ADD'
const REMOVE = 'comparedProduct/REMOVE'

export const add = productName => ({
  type: ADD,
  productName
})

export const remove = productName => ({
  type: REMOVE,
  productName
})


const initialState = {
  ComparedProductNames: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        ComparedProductNames: state.ComparedProductNames.filter(
          productName => action.productName !== productName
        ).concat(action.productName)
      }
    case REMOVE:
      return {
        ...state,
        ComparedProductNames: state.ComparedProductNames.filter(
          productName => action.productName !== productName
        )
      }
    default:
      return state
  }
}