import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

const PumpUpPage = () => (
  <section id='pump-up'>
    <Jumbotron fluid className='bg-primary text-white'>
      <Container className='pt-5 pb-5'>
        <h1 className='display-3 mt-3'>Pump Up</h1>
        <p className='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </Container>
    </Jumbotron>
    <Container className='pt-5 pb-5'>
      <Row>
        <Col sm='4'>
          <div className='mb-5 mb-lg-3'>
            <div className='text-center mb-3'>
              <i className='far fa-address-card fa-5x m-auto'></i>
            </div>
            <h3 className='text-center'>Avaliação</h3>
            <p className='lead mb-0'>
              Realizamos alguns diagnósticos. Entre eles, o mais importante é o Mapa Metabólico, que mensura as disfunções metabólicas e estéticas do seu corpo.
            </p>
          </div>
        </Col>
        <Col sm='4'>
          <div className='mb-5 mb-lg-3'>
            <div className='text-center mb-3'>
              <i className='fa fa-hands fa-5x m-auto'></i>
            </div>
            <h3 className='text-center'>Pump It</h3>
            <p className='lead mb-0'>
              Realizamos alguns diagnósticos. Entre eles, o mais importante é o Mapa Metabólico, que mensura as disfunções metabólicas e estéticas do seu corpo.
            </p>
          </div>
        </Col>
        <Col sm='4'>
          <div className='mb-5 mb-lg-3'>
            <div className='text-center mb-3'>
              <i className='far fa-thumbs-up fa-5x m-auto'></i>
            </div>
            <h3 className='text-center'>Resultado</h3>
            <p className='lead mb-0'>
              Realizamos alguns diagnósticos. Entre eles, o mais importante é o Mapa Metabólico, que mensura as disfunções metabólicas e estéticas do seu corpo.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <section className="showcase">
      <div className="container-fluid p-0">
        <div className="row no-gutters">

          <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('https://www.magote.com/upload/20160202-01-pumpup_felicity.jpg')"}}></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: "url('https://www.magote.com/upload/20160202-01-pumpup_felicity.jpg')"}}></div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Updated For Bootstrap 4</h2>
            <p className="lead mb-0">Newly improved, and full of great utility classNamees, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('https://www.magote.com/upload/20160202-01-pumpup_felicity.jpg')"}}></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Easy to Use &amp; Customize</h2>
            <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
          </div>
        </div>
      </div>
    </section>
  </section>
)

export default PumpUpPage
