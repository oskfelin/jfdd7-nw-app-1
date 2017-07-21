import React from 'react'
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
      const {data} = this.props.shops
      return (
        <div>{
          data.map(
          shop => shop.products
          ).reduce(
          (total, next) => total.concat(next), []
          ).filter(
          product => (product.id).toString === this.props.match.params.productId
          ).map(
          product =>
<p>{product.name}</p>


          )}
        </div>
      )
    }

  }
)
