import React from 'react'
import { connect } from 'react-redux'
import {
  Col,
  Row,
  Grid,
  Image
} from 'react-bootstrap'
import { connect } from 'react-redux'


export default connect(
  state => ({
    comparedProductNames: state.comparedProducts.comparedProductNames,
  }),
  dispatch => ({
    removeFromCompare: product => dispatch(remove(product))
  })
)(



)