import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import shops, {fetchShops} from './state/shops'
import searchEngine from './state/searchEngine'
import productFilters from './state/productFilters'
import comparedProducts from './state/comparedProducts'

const reducer = combineReducers({
  shops,
  searchEngine,
  productFilters,
  comparedProducts
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

store.dispatch(fetchShops())

export default store