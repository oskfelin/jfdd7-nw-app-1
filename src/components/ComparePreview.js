import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Col, Panel, Button, Image} from 'react-bootstrap'
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
      return (
        <Grid>
          <Panel>
            <Panel>
              {
                dataToDisplay.filter(
                  product => this.props.productsIds.includes(product.id)
                ).map(
                  product =>
                    <Col xs={3}>
                      <Image
                        width="30%"
                        href=""
                        src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'} responsive thumbnail/>
                      <div>{product.name}</div>
                      <Button bsSize="xsmall"
                              onClick={event => {
                        this.props.toggleCompare(product.id)
                        event.preventDefault()
                      }}>
                        Nie porównuj
                      </Button>
                    </Col>
                )}
            </Panel>
            <Button bsSize="xsmall">
              <Link to="/comparison">Przejdź do porównywarki</Link>
            </Button>
          </Panel>
        </Grid>
      )
    }
  }
)