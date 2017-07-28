import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import firebase from 'firebase'

const Home = (props) => (
  <Grid fluid>
    <div style={{float: "right"}}>
      <Link to="/">
        <Button>
          Home
        </Button>
      </Link>
        <Button onClick={() => firebase.auth().signOut()}>
          Wyloguj
        </Button>
    </div>
  </Grid>
)

export default Home