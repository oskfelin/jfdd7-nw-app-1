import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import uniqBy from 'lodash.uniqby'
import {
  Grid,
  Col
} from 'react-bootstrap'
import './ResultsView.css'
import { fetchShops } from '../state/shops'


export default connect(
  state => ({
    shops: state.shops,
    searchPhrase: state.searchEngine.searchPhrase,
    activeFilter: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops())
  })
)(


class ResultsView extends React.Component {

  componentWillMount() {
    this.props.fetchShops()
  }


  render(){
    const { data, fetching, error } = this.props.shops
    return (
      <div className="Result">
        { error === null ? null : <p>{error.message}</p> }
        { fetching === false ? null : <p>Fetching data...</p>}
        {
          data !== null && uniqBy(data.map(
            shop => shop.products.map(product => ({...product, shopName: shop.name }))
          ).reduce(
            (total, next) => total.concat(next), []
          ), 'name').filter(
            product => product.name.includes(this.props.searchPhrase)
          ).filter(product => product.category === this.props.activeFilter)
            .sort((a,b) => a.price > b.price).map(
            product =><Grid>
                <Col sm={3} className="resultPhoto">
                    <div>{product.shopName}</div>
                </Col>
                <Col sm={6}>
                    <div>
                        <h1 className="resultName">{product.name} </h1>
                    </div>
                </Col>
                <Col sm={3} className="resultPrice">
                    <div>{product.price + ' zł'}</div>
                  <Link to={'/product-page-view/' + product.name}><button className="resultButton">INFO</button></Link>
                </Col>

            </Grid>
          )
        }

      </div>

    )
  }
}
)