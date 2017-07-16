import React from 'react'
import {connect} from 'react-redux'
import uniqBy from 'lodash.uniqby'
import {
  ButtonGroup,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

import {fetchShops} from '../state/shops'
import {activateFilter} from '../state/productFilters'


import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';


export default connect(
  state => ({
    shops: state.shops,

    activeFilter: state.searchEngine.activeFilterName
  }),
  dispatch => ({
    fetchShops: () => dispatch(fetchShops()),
    activateFilter: (key) => dispatch(activateFilter(key))
  })
)(
  class ResultFilter extends React.Component {

    componentWillMount() {
      this.props.fetchShops()
    }

    render() {

      return (
        <div className="ResultFilter">
          <ButtonGroup vertical block>
            <DropdownButton title="Producent"
                            id="bg-vertical-dropdown-1"
                            onSelect={key => this.props.activateFilter(key)}>

              <MenuItem eventKey="name_xiaomi">Xiaomi</MenuItem>
              <MenuItem eventKey="name_lenovo">Lenovo</MenuItem>
              <MenuItem eventKey="name_htc">HTC</MenuItem>
              <MenuItem eventKey="name_iphone">Iphone</MenuItem>
              <MenuItem eventKey="name_lg">LG</MenuItem>
              <MenuItem eventKey="name_samsung">Samsung</MenuItem>
              <MenuItem eventKey="name_huawei">Huawei</MenuItem>
            </DropdownButton>

            <DropdownButton title="Sklep"
                            id="bg-vertical-dropdown-2"
                            onSelect={key => this.props.activateFilter(key)} >
              <MenuItem eventKey="name_biedronka">Biedronka</MenuItem>
              <MenuItem eventKey="name_lidl">Lidl</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>



            <DropdownButton title="Aparat"
                            id="bg-vertical-dropdown-3"
                            onSelect={key => this.props.activateFilter(key)} >
              <MenuItem eventKey="camera_3p2">3.2 mpx</MenuItem>
              <MenuItem eventKey="camera_4">4 mpx</MenuItem>
              <MenuItem eventKey="camera_6">6 mpx</MenuItem>
              <MenuItem eventKey="camera_6p4">6.4 mpx</MenuItem>
              <MenuItem eventKey="camera_12">12 mpx</MenuItem>
              <MenuItem eventKey="camera_24">24 mpx</MenuItem>
            </DropdownButton>


            <DropdownButton title="Dodatkowa karta pamięci"
                            id="bg-vertical-dropdown-4"
                            onSelect={key => this.props.activateFilter(key)}>
              <MenuItem eventKey="slot_sd">Tak</MenuItem>
              <MenuItem eventKey="no_slot">Nie</MenuItem>
            </DropdownButton>



            <DropdownButton title="Przekątna ekranu (cale)" id="bg-vertical-dropdown-5">
              <MenuItem eventKey="size_3p9">3.9</MenuItem>
              <MenuItem eventKey="size_4p2">4.2</MenuItem>
              <MenuItem eventKey="size_4p5">4.5</MenuItem>
              <MenuItem eventKey="size_4p8">4.8</MenuItem>
              <MenuItem eventKey="size_5p1">5.1</MenuItem>
              <MenuItem eventKey="size_5p2">5.2</MenuItem>
              <MenuItem eventKey="size_6">6</MenuItem>
            </DropdownButton>
          </ButtonGroup>

          <div className="slider">
            <p>Zakres cenowy</p>
            <Range defaultValue={[20, 80]}/>
          </div>
        </div>

      )
    }
  }
)
