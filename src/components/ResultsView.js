import React from 'react'
import uniqBy from 'lodash.uniqby'

import {
  Grid,
  Col
} from 'react-bootstrap'
import './ResultsView.css'

export default class ResultsView extends React.Component {

  state = {
    shops: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/shops.json'
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        shops: data
      })
    ).catch(
      error => console.log(error.message)
    )
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
                <Col sm={2} className="resultPhoto">
                    <div > FOTO </div>
                </Col>
                <Col sm={8}>
                    <div>
                        <h1 className="resultName">{product.name} </h1>
                    </div>
                </Col>
                <Col sm={2} className="resultPrice">
                    <div>{product.price + ' zł'}</div>
                     <button className="resultButton">INFO</button>
                </Col>

            </Grid>
          )
        }

      </div>

    )
  }
}