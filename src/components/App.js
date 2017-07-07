import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CategoriesMain from './CategoriesMain'
export default class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <CategoriesMain/>
        </div>
      </Router>
    )
  }
}