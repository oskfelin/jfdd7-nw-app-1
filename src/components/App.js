import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ProductPageView from "./ProductPageView";
import CategoriesMain from './CategoriesMain'
export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <CategoriesMain/>
          <ProductPageView/>
        </div>
      </Router>
    )
  }
}