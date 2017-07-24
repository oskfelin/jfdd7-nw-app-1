import React from 'react'
import {connect} from 'react-redux'
import {toggle} from '../state/comparedProducts'
import {Link} from 'react-router-dom'

import { Panel, Grid, Button, Col, Image } from 'react-bootstrap'

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
        <Grid>
          <Panel>
            {
              dataToDisplay.filter(
                product => this.props.productsIds.includes(product.id)
              ).map(
                product =>
                <Panel style={{
                  backgroundColor: "black"
                }}>
                    <img width={50} alt="" src={process.env.PUBLIC_URL + '/images/smartphones/'+product.name+'.jpg'}/>
                  <p>{product.name}></p>
                  <Button className="ButtonCompare" onClick={event => {
                    this.props.toggleCompare(product.id)
                    event.preventDefault()
                  }}>
                    Porównaj
                  </Button>
                  <Button>
                    <Link to="/comparison">Comparison</Link>
                  </Button>
              </Panel>
              )}
          </Panel>
        </Grid>
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
