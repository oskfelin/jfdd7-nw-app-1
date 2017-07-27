import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import firebase from 'firebase'

const Home = (props) => (
  <Grid fluid>
    <Button>
      <Link to="/">Home</Link>
    </Button>
    <Button>
      <Link to="/result-view">Results</Link>
    </Button>
    <Button>
      <Link to="/comparison">Comparison</Link>
    </Button>
    <Button
      onClick={() => firebase.auth().signOut()}>
      Wyloguj
    </Button>
  </Grid>
)

export default Home