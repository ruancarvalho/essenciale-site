import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Footer = ({ data }) => (
  <footer className="footer bg-light">
    <Container>
      <Row>
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
          <p className="text-muted small mb-4 mb-lg-0">
            &copy;2018 - Essenciale Manaus <br />Todos os Direitos Reservados.
          </p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a href="#">Sobre</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="#">Contact</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
  </footer>
)

export default Footer
