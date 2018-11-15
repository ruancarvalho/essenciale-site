import React from 'react'
import { Link } from 'gatsby'

const sectionIcon = 'https://res.cloudinary.com/essencialemanaus/image/upload/v1541965848/section-icon.png';

const Footer = ({ siteTitle, siteLogo }) => (
  <footer id="footer-widgets">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 mb-lg-0 mb-4">
          <aside className="widget widget_about">
            <div className="footer-logo"><img src={siteLogo} alt={siteTitle} /></div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              <ul className="widget-info">
                <li><i className="fas fa-map-marker"></i>R. Valerio Botelho, 621 - Sala 01</li>
                <li><i className="fas fa-phone"></i>(92) 982 316 646</li>
                <li><i className="fas fa-envelope"></i>contato@essencialemanaus.com.br</li>
              </ul>
          </aside>
        </div>
        <div className="col-md-4 col-sm-6">
          <aside className="widget widdget-instagram">
            <h4 className="widget-title"><img src={sectionIcon} alt="" />Instagram</h4>
          </aside>
        </div>
        <div className="col-md-4 col-sm-6 mb-lg-0 mb-4">
          <aside className="widget widget_links">
            <h4 className="widget-title"><img src={sectionIcon} alt="" />Nossos Serviços</h4>
            <ul>
              <li><Link to="index.html#">Home</Link></li>
              <li><Link to="index.html#">About</Link></li>
              <li><Link to="index.html#">Service</Link></li>
              <li><Link to="index.html#">Blog</Link></li>
              <li><Link to="index.html#">Project</Link></li>
            </ul>
            <ul>
              <li><Link to="index.html#">Nail Care</Link></li>
              <li><Link to="index.html#">Massage</Link></li>
              <li><Link to="index.html#">Hair Cut</Link></li>
              <li><Link to="index.html#">Waxing</Link></li>
              <li><Link to="index.html#">Make Up</Link></li>
            </ul>
          </aside>
        </div>        
      </div>
    </div>
  </footer>
)

export default Footer
