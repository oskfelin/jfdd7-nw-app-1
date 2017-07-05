import React from 'react'


export default class SearchMain extends React.Component {

  render() {
    return (
      <div>
        <div class="col-sm-offset-1 col-sm-10">
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email@example.com">
        </div>
        <div class="col-sm-offset-1 col-sm-10">
          <button id="btn-game" type="submit" class="btn btn-block send">Wyślij</button>
        </div>

      </div>
    )
  }

}