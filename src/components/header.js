import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle, siteLogo }) => (
  <section className="navbar-wrapper">
    <div className="navbar-area sticky-nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-6">
            <div className="logo main">
              <Link to={'/'}>
                <img className="responsive" src={siteLogo} alt={siteTitle} />
              </Link>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 d-none d-lg-block text-right">
            <nav className="main-menu">
              <ul>
                <li className="active">
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/servicos'}>Serviços</Link>
                </li>
                <li>
                  <Link to={'/tratamentos'}>Tratamentos</Link>
                </li>                                
                <li>
                  <Link to={'/sobre'}>Quem Somos</Link>
                </li>                                
                <li><Link to={'/contato'}>Contato</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mobile-menu-area d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mobile-menu">
                <nav className="mobile-menu-active">
                  <ul>
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li className="c-dropdowns">
                      <a href="index.html">Portfolio</a>
                      <ul className="cr-dropdown-menu">
                        <li>
                          <a href="portfolio-2-column.html">Portfolio 2 Column</a>
                        </li>
                        <li>
                          <a href="portfolio-3-column.html">Portfolio 3 Column</a>
                        </li>
                        <li>
                          <a href="portfolio-4-column.html">Portfolio 4 Column</a>
                        </li>
                      </ul>
                    </li>
                    <li className="c-dropdowns">
                      <a href="index.html">Pages</a>
                      <ul className="cr-dropdown-menu">
                        <li>
                          <a href="about-us.html">About</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="index.html">Other Pages</a>
                          <ul className="cr-sub-dropdown-menu">
                            <li>
                              <a href="404.html">404 Page</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="c-dropdowns">
                      <a href="index.html">Blog</a>
                      <ul className="cr-dropdown-menu">
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-full-width.html">Blog Full Width</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>

                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact-us.html">Contact</a></li>
                  </ul>
                </nav>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Header
