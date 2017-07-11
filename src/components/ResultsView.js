import React from 'react'
import { connect } from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {
  Grid,
  Col
} from 'react-bootstrap'
import './Result.css'
import { fetchShops } from '../state/shops'



export default connect(
  state => ({
    shops: state.shops
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops())
  })
)(


class ResultsView extends React.Component {

  componentWillMount() {
    this.props.shops()
  }


  render(){



    return (
      <div className="Result">

        {
          uniqBy(this.state.shops.map(
            shop => shop.products
          ).reduce(
            (total, next) => total.concat(next), []
          ), 'name').map(
            product =><Grid>
                <Col sm={2} className="resultBorder">
                    <div > FOTO </div>
                </Col>
                <Col sm={8}>
                    <div>
                        <h1 className="resultName">{product.name} </h1>

                        <button className="resultButton">INFO</button>

                    </div>
                </Col>
                <Col sm={2} className="resultBorder">
                    <div>{product.price + ' zł'}</div>
                </Col>

            </Grid>
          )
        }

      </div>

    )
  }
}
)