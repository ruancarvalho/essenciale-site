import React from 'react'
import Layout from '../components/layout'

const mapSource = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.9841866985892!2d-60.00584267083265!3d-3.1114383607303786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05c5ba5f8305%3A0x72c34a6b729a0250!2sEssenciale+Manaus!5e0!3m2!1spt-BR!2sbr!4v1542292269398'

const ContactPage = () => (
  <Layout>
    <section id="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Entre em Contato</h2>            
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 contact-info mt-5 mt-lg-0">
            <h2>Informa&ccedil;&otilde;es</h2>

            <div className="info-box mt-4">
              <i className="fas fa-map-marker"></i>
              <h4>Endereço:</h4>
              <p>
                Rua Valério Botelho de Andrade, 621<br />
                (92) 9 8231 6646 <br />
                contato@essencialemanaus.com.br
              </p>
            </div>

            <div className="info-box">
              <i className="fas fa-clock"></i>
              <h4>Horários Disponíveis:</h4>
              <p>
                Segunda-Sexta: 8h às 20h <br />
                Sábados: 8h às 18h <br />
                Domingos: Fechado
              </p>
            </div>
          </div>
          <div className="col-md-7 contact-map mt-5 mt-lg-0">
            <h2>Como Chegar</h2>
            <div class="embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src={mapSource} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage