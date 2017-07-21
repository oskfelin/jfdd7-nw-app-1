import React from 'react'
import {Grid, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
    <button
      onClick={() => firebase.auth().signOut()}>
      Wyloguj
    </button>
  </Grid>
)

export default Home