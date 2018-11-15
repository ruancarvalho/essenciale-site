import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import CTA from './cta'
import Footer from './footer'
import FooterCopyright from './footer-copyright'

import '../assets/css/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            logo
            footer
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.5.0/css/all.css', integrity:'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', crossorigin:'anonymous' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} siteLogo={data.site.siteMetadata.logo} />
        {children}
        <CTA />
        <Footer siteTitle={data.site.siteMetadata.title} siteLogo={data.site.siteMetadata.footer} />
        <FooterCopyright siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
