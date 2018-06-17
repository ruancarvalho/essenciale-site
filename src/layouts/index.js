import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// main site style
import '../scss/essenciale.scss'

import CallToAction from '../templates/cta'
import Footer from '../templates/footer'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <div className='App'>
      <Helmet title={data.site.siteMetadata.title} />
      <nav className='navbar navbar-expand-lg static-top'>
        <Container>
          <Link to='/' className='navbar-brand'>{data.site.siteMetadata.title}</Link>
          <ul className='nav navbar-nav'>

            {user && (
              <li className='nav-item'>
                <a href='/admin' className='nav-link'>Admin</a>
              </li>
            )}

            <li className='nav-item'>
              <Link to='/como-chegar' className='nav-link'>
                R. Valério Botelho de Andrade, 621 - São Francisco
              </Link>
            </li>
            <li className='nav-item'>
              <a href="http://facebook.com/essencialemao" target="_blank" className='nav-link'>
                <i className="fab fa-facebook fa-fw"></i>
              </a>
            </li>
            <li className='nav-item'>
              <a href="http://instagram.com/essencialemao" target="_blank" className='nav-link'>
                <i className="fab fa-instagram fa-fw"></i>
              </a>
            </li>
          </ul>
        </Container>
      </nav>
      <div className='pageContent'>{children()}</div>
      <CallToAction />
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
