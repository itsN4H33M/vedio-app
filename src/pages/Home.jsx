import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {

  const [uploadResponse, setUploadResponse] = useState({})

  return (
    <div>
      <div className="title container my-5 d-flex justify-content-between align-items-center">
        <div className='add'><Add setUploadResponse={setUploadResponse}/></div>
        <Link to={'/watch-history'} className='text-decoration-none'>Watch History</Link>
      </div>
      <Row className="w-100">
        <Col lg={9}>
          <h3>All Videos</h3>
          <div className="videos">
            <View uploadResponse={uploadResponse}/>
          </div>
        </Col>
        <Col lg={3}>
          <Category />
        </Col>
      </Row>
    </div>
  )
}

export default Home