import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductPageView from "./ProductPageView"
import CategoriesMain from './CategoriesMain'
import ComparePreview from './ComparePreview'
import Comparison from './Comparison'
import Home from './Home'

import ResultView from './ResultsView'
import SearchMain from './SearchMain'
import Footer from './Footer'

import SignUp from './SignUp'
export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Home/>
          <ComparePreview/>
          <SearchMain/>
          <Route exact path="/" component={CategoriesMain}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/comparison" component={Comparison}/>
          <Route path="/result-view" component={ResultView}/>
          <Route path="/product-page-view/:productName" component={ProductPageView}/>
          <Footer />
        </div>
      </Router>
    )
  }
}
