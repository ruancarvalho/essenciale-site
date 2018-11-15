import React from 'react'
import { Link } from 'gatsby'

const CTA = ({ siteTitle, siteLogo }) => (
  <section id="subscribe">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 text-lg-left text-center mb-lg-0 mb-3">
          <i className="ei ei-icon_mail"></i>
          <h3 className="text-uppercase">Quer receber dicas e descontos por e-mail?</h3>
          <p>Subcribe to lastest smartphones news &amp; great deals we offer</p>
        </div>
        <div className="col-lg-5 col-md-12 text-center">
          <form id="subscribe-form" action="index.html#" method="POST">
            <input type="email" name="email" id="subscribe-mail" placeholder="Seu E-mail" required="" />
              <button>Quero Receber!</button>
          </form>
        </div>
      </div>
    </div>
  </section> 
)

export default CTA
