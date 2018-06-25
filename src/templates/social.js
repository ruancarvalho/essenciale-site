import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const SocialMedia = ({ data }) => (
  <section id='social' className='social-media bg-primary text-center py-5 text-white'>
    <Container>
      <h3 className='display-4'>Nós  <i className='fa fa-heart'></i> seguidores!
      </h3>
      <ul className='list-inline list-social'>
        <li className='list-inline-item m-4'>
          <a href='http://facebook.com/essencialemao' target='_blank' className='text-white'>
            <i className='fab fa-facebook fa-4x fa-fw'></i>
          </a>
        </li>
        <li className='list-inline-item'>
          <a href='http://instagram.com/essencialemao' target='_blank' className='text-white'>
            <i className='fab fa-instagram fa-4x fa-fw'></i>
          </a>
        </li>
      </ul>
    </Container>
  </section>
)

export default SocialMedia
