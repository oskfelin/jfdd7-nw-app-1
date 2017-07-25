import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Col, Panel, Button, Image} from 'react-bootstrap'
import {toggle} from '../state/comparedProducts'
import './ComparePreview.css'

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
      return (
        <Grid>
          <div className="ComparePreview">
            {
              dataToDisplay.filter(
                product => this.props.productsIds.includes(product.id)
              ).map(
                product =>
                  <div className="CompareItem">
                    <Link to={'/product-page-view/' + product.name}>
                      <Image
                        width="100"
                        href=""
                        src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'} responsive
                        thumbnail/>
                      <div className="CompareItem">{product.name}</div>
                      <Button bsSize="xsmall"
                              onClick={event => {
                                this.props.toggleCompare(product.id)
                                event.preventDefault()
                              }}>
                        Nie porównuj
                      </Button>
                    </Link>
                  </div>
              )}
            <Button bsSize="xsmall">
              <Link to="/comparison">Przejdź do porównywarki</Link>
            </Button>
          </div>
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
