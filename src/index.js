import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import store from './store'
import firebase from 'firebase'
import Auth from './components/Auth'

import { syncUser } from './state/auth'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'


firebase.initializeApp({
  apiKey: "AIzaSyDztWpOCDHq0dJ5ukwGTX1Afs8gzeO6RLg",
  authDomain: "jfdd7-nw-app.firebaseapp.com",
  databaseURL: "https://jfdd7-nw-app.firebaseio.com",
  projectId: "jfdd7-nw-app",
  storageBucket: "",
  messagingSenderId: "385172902941"
})

firebase.auth().onAuthStateChanged(user => store.dispatch(syncUser(user)))

ReactDOM.render(
  <Provider store={store}>
    <Auth >
      <App />
    </Auth>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()