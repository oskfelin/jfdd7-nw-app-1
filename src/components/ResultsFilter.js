import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import {
//   Grid,
//   Col
// } from 'react-bootstrap'

import { fetchShops } from '../state/shops'




export default connect(
  state => ({
    shops: state.shops,
    searchPhrase: state.searchEngine.searchPhrase,
    activeFilter: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops())
  })
)(


  class ResultFilter extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }


    render(){
      // const { data, fetching, error } = this.props.shops
      return (
        <div className="ResultFilter">
            123


        </div>

      )
    }
  }
)
