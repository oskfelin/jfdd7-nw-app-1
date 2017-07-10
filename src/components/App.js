import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ProductPageView from "./ProductPageView"
import CategoriesMain from './CategoriesMain'
import Home from './Home'
import ResultView from './ResultsView'
import SearchMain from './SearchMain'

export default class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <Home/>
          <SearchMain />
          <ResultView/>
          <Route exact path="/" component={CategoriesMain}/>
          <Route path="/product-page-view" component={ProductPageView}/>
        </div>
      </Router>
    )
  }
}