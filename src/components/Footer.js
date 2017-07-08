import React from 'react'
import {
  Col,
} from 'react-bootstrap'

import './Footer.css'

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="text-center biznes">
            <Col xs={6}>
              <a className="hvr-underline-from-left footer-list" href="#">Reklama w serwisie</a>
            </Col>
            <Col xs={6}>
              <a className="hvr-underline-from-left footer-list" href="#">Polityka prywatności</a>
            </Col>
            <Col xs={6}>
              <a className="hvr-underline-from-left footer-list" href="#">Regulamin serwisu</a>
            </Col>
            <Col xs={6}>
              <a className="hvr-underline-from-left footer-list" href="#">Kontakt</a>
            </Col>

          </div>
          <p className="text-center znajdz">Znajdziesz nas na:</p>

          <div
            className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 text-center social-media img-responsive">

            <a href="http://www.facebook.com" target="_blank"><img
              src={process.env.PUBLIC_URL + 'images/footer/fb.svg'} height="48"/></a>
            <a href="http://www.facebook.com" target="_blank"><img
              src={process.env.PUBLIC_URL + 'images/footer/googleplus.svg'} height="48"/></a>
            <a href="http://www.facebook.com" target="_blank"><img
              src={process.env.PUBLIC_URL + 'images/footer/twitter.svg'} height="48"/></a>
            <a href="http://www.facebook.com" target="_blank"><img
              src={process.env.PUBLIC_URL + 'images/footer/youtube.svg'} height="48"/></a>

          </div>
          <div className="col-xs-12 text-center">
            <span className="prawa">2017 © Nie Wiem Team - Jarosław Michalski / Marcin Kopystyński / Oskar Feliński / Mateusz Targowski. Wszelkie prawa zastrzeżone. </span>
          </div>
        </div>
      </footer>
    )
  }
}
