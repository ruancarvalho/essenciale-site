import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

const EyebrowPage = () => (
  <section id='pump-up'>
    <Jumbotron fluid className='bg-primary text-white'>
      <Container className='pt-5 pb-5'>
        <Row>
          <Col sm='6'>
            <h2 className='mt-3'>
              <span className='display-4'>Design de</span><br />
              <span className='display-1'>Sobrancelhas</span>
            </h2>
            <p className='lead'>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
            </p>
          </Col>
          <Col sm='6' className='text-center py-5'>
            <p className='lead'>
            A partir de
            </p>
            <p className='display-4'>
              R$ 19,90
            </p>
            <Button size='lg' color='success'>Quero Fazer!</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container className='pt-5 pb-5'>
      <Row>
        <Col sm='4'>
          <div className='my-5'>
            <div className='text-center mb-3'>
              <i className='far fa-address-card fa-3x m-auto text-primary'></i>
            </div>
            <h3 className='text-center text-primary'>Avaliação</h3>
            <p className='lead mb-0'>
              Realizamos alguns diagnósticos. Entre eles, o mais importante é o Mapa Metabólico, que mensura as disfunções metabólicas e estéticas do seu corpo.
            </p>
          </div>
        </Col>
        <Col sm='4'>
          <div className='my-5'>
            <div className='text-center mb-3'>
              <i className='far fa-eye fa-3x m-auto text-primary'></i>
            </div>
            <h3 className='text-center text-primary'>Design</h3>
            <p className='lead mb-0'>
              Realizamos alguns diagnósticos. Entre eles, o mais importante é o Mapa Metabólico, que mensura as disfunções metabólicas e estéticas do seu corpo.
            </p>
          </div>
        </Col>
        <Col sm='4'>
          <div className='my-5'>
            <div className='text-center mb-3'>
              <i className='far fa-thumbs-up fa-3x m-auto text-primary'></i>
            </div>
            <h3 className='text-center text-primary'>Acabamento</h3>
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

export default EyebrowPage
