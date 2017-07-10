import React from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'
import './Result.css'

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
          this.state.shops.map(
            shop => shop.products
          ).reduce(
            (total, next) => total.concat(next), []
          ).map(
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