import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <section id="page-404" class="section-padding-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
              <h2>Oops..</h2>
              <h3>Não encontramos nada aqui</h3>
              <Link to={'/'} class="boxed-btn">Voltar para Página Inicial</Link>
            </div>
          </div>
        </div>
    </section>
  </Layout>
)

export default NotFoundPage
