import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap'
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
        <Grid>
          <Panel>
            <Row>
              {
                dataToDisplay.filter(
                  product => this.props.productsIds.includes(product.id)
                ).map(
                  product =>
                    <Col xs={3}>
                      <img width={50} alt=""
                           src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'}/>
                      <div>{product.name}</div>
                      <Button onClick={event => {
                        this.props.toggleCompare(product.id)
                        event.preventDefault()
                      }}>
                        Nie porównuj
                      </Button>
                    </Col>
                )}
              <Button>
                <Link to="/comparison">Przejdź do porównywarki</Link>
              </Button>
            </Row>
          </Panel>
        </Grid>
      )
    }
  }
)