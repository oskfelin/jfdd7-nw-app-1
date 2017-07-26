import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {slide as Menu} from 'react-burger-menu'
import {Grid, Button, Image} from 'react-bootstrap'
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
        <div>
            {
              dataToDisplay.filter(
                product => this.props.productsIds.includes(product.id)
              ).map(
                product =>
                  <div>
                    <Menu noOverlay right>
                      <Grid fluid>
                        <Link to={'/product-page-view/' + product.name}>
                          <Image
                            width="100"
                            src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'} responsive
                            thumbnail/>
                        </Link>
                        <div>{product.name}</div>
                        <Button bsSize="xsmall"
                                onClick={event => {
                                  this.props.toggleCompare(product.id)
                                  event.preventDefault()
                                }}>
                          Usuń z porównania
                        </Button>
                      <Button bsSize="xsmall">
                        <Link to="/comparison">Przejdź do porównywarki</Link>
                      </Button>
                      </Grid>
                    </Menu>
                    <div id="button">Produkty do porównania</div>
                  </div>
              )}
          </div>
      )
    }
  }
)
