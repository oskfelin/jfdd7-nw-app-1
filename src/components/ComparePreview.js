import React from 'react'
import {connect} from 'react-redux'
import {toggle} from '../state/comparedProducts'
import {Table} from 'react-bootstrap'

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




/*
import { nameOfAnimation as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  .
  .
  .
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}*/
