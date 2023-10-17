import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadResponse}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getUploadedVideos = async () => {
    const { data } = await getAllVideos()
    setAllVideos(data)
  }

  useEffect(() => {
    getUploadedVideos()
  }, [uploadResponse,deleteVideoStatus])

  return (
    <Row className='border border-2 m-3 w-100'>
      {
        allVideos.length > 0 ?
          allVideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard displayData={video} setDeleteVideoStatus = {setDeleteVideoStatus}/>
            </Col>
          ))
          : <p className='text-danger'>Nothing to Display</p>
      }
    </Row>
  )
}

export default View