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
    <button
      onClick={() => firebase.auth().signOut()}>
      Wyloguj
    </button>
    <Link to="/SignUp" className="login">
    <Button bsStyle="primary" bsSize="large" >SignUp</Button>
    </Link>
  </Grid>
)

export default Home