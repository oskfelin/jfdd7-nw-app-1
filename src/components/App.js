import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ProductPageView from "./ProductPageView"
import CategoriesMain from './CategoriesMain'
import Home from './Home'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Home/>
          <Route exact path="/" component={CategoriesMain}/>
          <Route path="/product-page-view" component={ProductPageView}/>
        </div>
      </Router>
    )
  }
}