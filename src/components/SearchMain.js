import React from 'react'
import {FormGroup, FormControl, InputGroup, DropdownButton, MenuItem, Button} from 'react-bootstrap'

export default class SearchMain extends React.Component {

  render() {
    return (
      <FormGroup bsClass="col-md-offset-4 col-md-8" row>
        <InputGroup bsClass="col-md-4">
          <FormControl type="text" placeholder="Czego potrzebujesz?"/>
          <DropdownButton
            componentClass={InputGroup.Button}
            id="input-dropdown-addon"
            title="Kategoria"
          >
            <MenuItem key="1">Kategoria 1</MenuItem>
            <MenuItem key="2">Kategoria 2</MenuItem>
            <MenuItem key="3">Kategoria 3</MenuItem>
            <MenuItem key="4">Kategoria 4</MenuItem>
            <MenuItem key="4">Kategoria 1</MenuItem>
          </DropdownButton>
          <Button bsStyle="primary col-md-5">Wyszukaj</Button>
        </InputGroup>

      </FormGroup>
    )
  }
}

