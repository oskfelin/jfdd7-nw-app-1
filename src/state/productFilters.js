const TOGGLE_FILTER = 'productFilters/TOGGLE_FILTER'
const RESET_FILTER = 'productFilters/REMOVE_FILTER'

export const activateFilter = filterName => ({
  type: TOGGLE_FILTER,
  filterName
})

export const resetFilter = () => ({
  type: RESET_FILTER
})


const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        activeFilterNames: state.activeFilterNames.includes(action.filterName) ?
          state.activeFilterNames.filter(
            filterName => filterName !== action.filterName
          ) :
          state.activeFilterNames.filter(
            activeFilterName => {
              const prefix = action.filterName.split('_')[0]

              return !(activeFilterName.indexOf(prefix) === 0)
            }
          ).concat(
            action.filterName
          )
      }
      case RESET_FILTER:
      return initialState

    default:
      return state
  }
}