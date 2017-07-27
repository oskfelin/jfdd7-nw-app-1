import React from 'react'
import {connect} from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {toggle} from '../state/comparedProducts'
import {Table, Grid, Image, Button} from 'react-bootstrap'
import './comparison.css'
import comparisonLegend from './comparisonLegend'

export default connect(
  state => ({
    productsIds: state.comparedProducts.productsIds,
    shops: state.shops

  }),
  dispatch => ({
    toggleCompare: id => dispatch(toggle(id)),

  })
)(
  class Comparison extends React.Component {

    render() {
      const {data} = this.props.shops

      if (data === null) {
        return <p>Wczytywanie...</p>
      }


      const dataToDisplay = data.map(
        shop => shop.products
      ).reduce(
        (total, next) => total.concat(next), []
      ).filter(
        product => this.props.productsIds.includes(product.id)
      )

      if (dataToDisplay.length === 0) {
        return <p>Brak produktów do porównania</p>
      }

      const attributes = Object.keys(dataToDisplay[0])
      console.log(dataToDisplay)
      return (
        <Grid>

          <Table condensed hover striped bordered>

            <thead className="tableComparisonHead">
            <tr>
              <td className="invisible"></td>
              {
                dataToDisplay.filter(
                  product => this.props.productsIds.includes(product.id)
                ).map(
                  product =>
                    <td>
                      <Image className="productImgComparison" alt=""
                             src={process.env.PUBLIC_URL + '/images/smartphones/' + product.name + '.jpg'} responsive/>

                    </td>
                )}
            </tr>
            </thead>
            <Button className="ShowDifferences">Podświetl różnice</Button>
            <tbody className="tableComparison">
            {
              attributes.map(
                attribute => ({
                  name: attribute,
                  uniqueValues: uniqBy(dataToDisplay, attribute).length
                })
              ).sort(
                (a, b) => a.uniqueValues < b.uniqueValues
              ).map(
                attribute => (
                  <tr style={{background: attribute.uniqueValues === 1 ? 'white': '#fdffb5' }}>
                    <td>{comparisonLegend[attribute.name]}</td>
                    {
                      dataToDisplay.map(
                        product => (
                          <td>{product[attribute.name]}</td>
                        )
                      )
                    }
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </Grid>
      )
    }

  }
)