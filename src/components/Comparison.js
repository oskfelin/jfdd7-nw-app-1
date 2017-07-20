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
    comparedProduct: state.comparedProducts.comparedProduct,
  }),
  dispatch => ({
    toggleCompare: product => dispatch(toggle(product))
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