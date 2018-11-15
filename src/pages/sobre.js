import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <section id="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>Quem Somos</h2>
          </div>
        </div>
      </div>
    </section>

    <section id="welcome" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-12 text-center">
            <div class="section-title">
              <h3>Olá, somos a</h3>
              <h2>Essenciale</h2>
              <hr />
              <p>It is a long established fact that a reader will be distracted by the readable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
