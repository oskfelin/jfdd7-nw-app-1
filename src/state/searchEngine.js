const UPDATE_SEARCH_PHRASE = 'searchEngine/UPDATE_SEARCH_PHRASE'
const UPDATE_ACTIVE_FILTER_NAME = 'searchEngine/UPDATE_ACTIVE_FILTER_NAME'

export const updateSearchPhrase = searchPhrase => ({
  type: UPDATE_SEARCH_PHRASE,
  searchPhrase
})

export const activeFilter = activeFilterName => ({
  type: UPDATE_ACTIVE_FILTER_NAME,
  activeFilterName
})

const initialState = {
  searchPhrase: '',
  activeFilterName: ''
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_SEARCH_PHRASE:
      return {
        ...state,
        searchPhrase: action.searchPhrase
      }
    case UPDATE_ACTIVE_FILTER_NAME :
      return {
        ...state,
        activeFilterName: action.activeFilterName
      }
    default:
      return state
  }
}