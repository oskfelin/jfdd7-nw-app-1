import React from 'react'
import {connect} from 'react-redux'
import {
  Col,
  Row,
  Grid,
  Image
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {toggle} from '../state/comparedProducts'

export default connect(
  state => ({
    productsIds: state.comparedProducts.productsIds,
    shops: state.shops
  }),
  dispatch => ({
    toggleCompare: id => dispatch(toggle(id)),

  })
)(
  class Comparison extends React.Component {

    render() {
      return (
        <div>

        </div>
      )
    }

  }
)
