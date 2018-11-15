import React from 'react'
import { Link } from 'gatsby'

const FooterCopyright = ({ siteTitle }) => (
  <section id="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12 text-lg-left text-center mb-lg-0 mb-3 copyright-text">
          <ul>
            <li><Link to={'/'}>&copy;2018 {siteTitle} </Link></li>
            <li><Link to="index.html#">Termos & Condições</Link></li>
            <li><Link to="index.html#">Privacidade</Link></li>
            <li><Link to="index.html#">Contato</Link></li>
          </ul>
        </div>
        <div className="col-lg-6 col-12">
          <ul className="text-lg-right text-center payment-method">           
            <li><Link to={'/'}><i className="fab fa-cc-mastercard"></i></Link></li>
            <li><Link to={'/'}><i className="fab fa-cc-visa"></i></Link></li>
            <li><Link to={'/'}><i className="fas fa-credit-card"></i></Link></li>
            <li><Link to={'/'}><i className="fas fa-money-bill-alt"></i></Link></li>
          </ul>
          <a href="#" className="scrollup"><i className="fas fa-arrow-up"></i></a>
        </div>
      </div>
    </div>
  </section>
)

export default FooterCopyright
