import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const CTA = ({ data }) => (
  <section className="call-to-action text-center">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="display-4">Agende seu Horário</h2>
          <hr className="my-4" />
          <p className="mb-5">Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 ml-auto text-center">
          <i className="fab fa-whatsapp fa-3x mb-3"></i>
          <p>92 98231 6646</p>
        </div>
        <div className="col-sm-4 mr-auto text-center">
          <i className="fab fa-whatsapp fa-3x mb-3"></i>
          <p>123-456-6789</p>
        </div>
        <div className="col-sm-4 mr-auto text-center">
          <i className="fab fa-whatsapp fa-3x mb-3"></i>
          <p>123-456-6789</p>
        </div>
      </div>
    </div>
  </section>
)

export default CTA
