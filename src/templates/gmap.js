import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const GMap = ({ data }) => (
  <section id='location' className='gmaps'>
    <iframe scrolling='no' marginHeight='0' marginWidth='0' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.884837424743!2d-60.01160015151294!3d-3.1023071347787763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72c34a6b729a0250!2sEssenciale+Manaus!5e0!3m2!1spt-BR!2sbr!4v1529780173752' width='100%' height='100%' frameBorder='0' allowFullScreen></iframe>
    <br />
    <small>
      <a href='https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A'></a>
    </small>
  </section>
)

export default GMap
