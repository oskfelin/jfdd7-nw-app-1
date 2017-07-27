import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import shops, {fetchShops} from './state/shops'
import searchEngine from './state/searchEngine'
import searchFilters from './state/searchFilters'
import productFilters from './state/productFilters'
import comparedProducts from './state/comparedProducts'
import localstorage from 'redux-localstorage'
import auth from './state/auth'

const reducer = combineReducers({
  shops,
  searchEngine,
  searchFilters,
  productFilters,
  comparedProducts,
  auth,
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  ),
  localstorage(['auth', 'comparedProducts'], { key: 'LogInUser'})
))

store.dispatch(fetchShops())

export default store