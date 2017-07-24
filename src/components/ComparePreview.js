import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
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
  class ComparePreview extends React.Component {

    render() {
      const {data} = this.props.shops
      const dataToDisplay = data === null ? [] : data.map(
        shop => shop.products
      ).reduce(
        (total, next) => total.concat(next), []
      )
      console.log(dataToDisplay)
      return (
        <div>
          <Table>
            {
              dataToDisplay.filter(
                product => this.props.productsIds.includes(product.id)
              ).map(
                product =>
                  <tbody>
                  <tr>
                    <td>{product.name}</td>
                  </tr>
                  </tbody>
              )}
          </Table>
        </div>
      )
    }
  }
)