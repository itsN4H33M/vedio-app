import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistory, deleteVideo } from '../services/allAPI';

function VideoCard({ displayData, setDeleteVideoStatus, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)

    // get caption and link
    const { caption, embedLink } = displayData

    // generate timestamp
    let today = new Date()
    const timestamp = (new Intl.DateTimeFormat("en-US", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today));

    let reqBody = {
      caption, embedLink, timestamp
    }

    // add to json server api call
    await addHistory(reqBody)
  };

  const handleDelete = async (id) => {
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
    console.log(response);
  }

  const dragStart = (e, id) => {
    console.log("Drag started")
    e.dataTransfer.setData("cardID", id)
  }

  return (
    <>
      <Card className='m-2' draggable onDragStart={(e) => dragStart(e, displayData?.id)}>
        <Card.Img onClick={handleShow} style={{ height: "200px" }} variant="top" src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayData?.caption}</h6>
            {insideCategory ? "" : <button onClick={() => handleDelete(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="450" height="450" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard