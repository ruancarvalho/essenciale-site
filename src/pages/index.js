import React from 'react'
import {
  Container, Row, Col,
  CardColumns, Card, CardImgOverlay,
  CardImg, CardBody, CardText
} from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <Container>
      {/* {posts.map(({ node: post }) => (
        <Card style={{marginBottom: 10}} key={post.id}>
          <CardBody>
            <CardText><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardText>
            <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
            <CardText>{post.excerpt}</CardText>
          </CardBody>
        </Card>
    ))} */}
      <section id='services' className='showcase'>
        <Row>
          <Col sm='12' className='text-center my-5'>
            <h2 className='display-4'>Nossos Serviços</h2>
            <h3 className='lead text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
          </Col>
        </Row>
        <Row>
          <CardColumns>
            <Card className='mb-4'>
              <Link to='facial/micropigmentacao'>
                <CardImg top width="100%" src="https://placeimg.com/300/200/sepia" alt="Card image cap" />
                <CardImgOverlay>
                  <CardText className='h3 py-3'>Micropigmentação</CardText>
                </CardImgOverlay>
                </Link>
            </Card>
            <Card className='mb-4'>
              <Link to='facial/sobrancelha'>
                <CardImg top width="100%" src="https://placeimg.com/300/200/sepia" alt="Card image cap" />
                <CardImgOverlay>
                  <CardText className='h3 py-3'>Maquiagem</CardText>
                </CardImgOverlay>
              </Link>
            </Card>
            <Card className='mb-4'>
              <Link to='corporal/modeladora'>
                <CardImg top width="100%" src="https://placeimg.com/300/200/sepia" alt="Card image cap" />
                <CardImgOverlay>
                  <CardText className='h3 py-3'>Massagem Modeladora</CardText>
                </CardImgOverlay>
              </Link>
            </Card>
            <Card className='mb-4'>
              <Link to='facial/sobrancelha'>
                <CardImg top width="100%" src="https://placeimg.com/300/200/sepia" alt="Card image cap" />
                <CardImgOverlay>
                  <CardText className='h3 py-3'>Design de Sobrancelha</CardText>
                </CardImgOverlay>
                </Link>
            </Card>
            <Card className='mb-4'>
              <Link to='corporal/depilacao'>
                <CardImg top width="100%" src="https://placeimg.com/300/200/sepia" alt="Card image cap" />
                <CardImgOverlay>
                  <CardText className='h3 py-3'>Depilação</CardText>
                </CardImgOverlay>
              </Link>
            </Card>
            <Card className='mb-4 see-all' inverse>
              <Link to='servicos'>
                <CardImg top width="100%" src="//via.placeholder.com/300x200/924cb8/ffffff?text=&nbsp;" alt="Card image cap" />
                <CardImgOverlay>
                  <CardText className='h3 py-3'>Veja Mais...</CardText>
                </CardImgOverlay>
              </Link>
            </Card>
          </CardColumns>
        </Row>
      </section>
    </Container>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
  }
`
