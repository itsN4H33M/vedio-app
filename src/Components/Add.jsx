import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadResponse}) {
  const [show, setShow] = useState(false);

  const [video, setVideo] = useState({
    id: '', caption: '', url: '', embedLink: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractUrl = (e) => {
    const { value } = e.target

    if (value) {
      const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({ ...video, embedLink: embedData })
    }
    else {
      setVideo({ ...video, embedLink: "" })
    }
  }

  const handleUpload = async () => {
    const { id, caption, url, embedLink } = video

    if (!id || !caption || !url || !embedLink) {
      toast.warning("Please fill the form completely")
    }
    else {
      const response = await uploadVideo(video)

      if (response.status >= 200 && response.status < 300) {
        setUploadResponse(response.data)
        toast.success(`${response.data.caption} added successfully!!!`)
        handleClose()
      }
      else {
        toast.error("Uploading Error......")
      }
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn ms-3'><i className="fa-regular fa-plus fs-5"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the Form.</p>
          <Form className='border border-2 p-2 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setVideo({ ...video, url: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Link" onChange={extractUrl} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
      position='top-center'
      theme='colored'/>
    </>
  )
}

export default Add