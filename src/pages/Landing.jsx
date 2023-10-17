import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigateByUrl = useNavigate()

  return (
    <div>
      {/* Introduction */}
      <Row className='my-5 align-items-center justify-content-center'>
        <Col></Col>
        <Col lg={4} className='p-3'>
          <h4 className='py-1'>Welcome to <span className='text-info border'>UPlayer</span></h4>
          <p style={{ textAlign: 'justify' }}>Welcome to UPlayer, the ultimate destination for music enthusiasts and creators alike! UPlayer is a cutting-edge platform that seamlessly blends music uploading and listening into one vibrant community. Whether you're an artist looking to share your latest creations or a music lover seeking fresh tunes, UPlayer has something special in store for you.</p>
          <button onClick={() => navigateByUrl('/home')} type="button" className="btn btn-info btn-sm mt-3 p-3">Get Started</button>
        </Col>
        <Col></Col>
        <Col lg={6}>
          <img className='img-fluid ms-5 rounded-4' src="https://media.tenor.com/9SFSfC2n0lkAAAAC/head-phones-music.gif" alt="Simpson" />
        </Col>
      </Row>

      {/* Features */}
      <div className="container my-5">
        <h3 className='text-center mb-4'>Features</h3>
        <div className="cards d-flex justify-content-between align-items-center">
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://media2.giphy.com/media/PnsF0HweRIw2A7K9yp/source.gif" />
            <Card.Body>
              <Card.Title className='py-1 text-dark'>Manage Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img style={{ height: '350px' }} variant="top" src="https://animated-gif-creator.com/images/01/folder-by-jess-aguilera-on-dribbble_75.gif" />
            <Card.Body className='bg-light'>
              <Card.Title className='py-1 text-dark'>Categorise Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://clipartart.com/images/equalizer-gif-clipart-5.gif" />
            <Card.Body>
              <Card.Title className='py-1 text-dark'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/*  */}
      <div className="container my-5 border border-2 rounded-2 d-flex justify-content-between align-items-center p-4">
        <div className="content">
          <h2 className='text-info pb-3'>Simple, Fast and Powerful</h2>
          <h6 className='pb-2'><span className='fs-5'>Play Everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h6>
          <h6 className='pb-2'><span className='fs-5'>Categorise Videos</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h6>
          <h6 className='pb-2'><span className='fs-5'>Managing History</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h6>
        </div>
        <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UtF6Jej8yb4?si=giCh4J1jofT9R9V2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing