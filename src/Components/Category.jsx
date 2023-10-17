import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCategory, getCategory, getVideo, saveCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState()
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleAddCategory = async () => {
    if (categoryName) {
      // make api call
      const body = {
        categoryName, allVideos: []
      }

      const response = await saveCategory(body)

      if (response.status >= 200 && response.status < 300) {
        handleClose()
        toast.success("Category added successfully")
        // reset state
        setCategoryName("")

        // call handleGetCategory
        handleGetCategory()
      }
      else {
        toast.error("Adding error")
      }
    }
    else {
      toast.info("Please fill the form")
    }
  }

  const handleGetCategory = async () => {
    const { data } = await getCategory()
    setAllCategory(data);
    handleGetCategory()
  }

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { handleGetCategory() }, [])

  const videoDropped = async (e, categoryID) => {
    console.log("Inside ID:" + categoryID)
    const videoCardID = e.dataTransfer.getData("cardID")
    console.log("Video ID:" + videoCardID);

    // get details of video dropped
    const { data } = await getVideo(videoCardID)

    // get details of category being dropped to
    const selectedCategory = allCategory.find(item => item.id === categoryID)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryID, selectedCategory)
    handleGetCategory()
  }

  return (
    <>
      <div className='d-grid'>
        <Button className='m-2' onClick={handleShow}>Add New Category</Button>
      </div>

      {
        allCategory.length > 0 ? allCategory.map(item => (
          <div className='border border-2 rounded my-2 p-2' droppable onDrop={(e) => videoDropped(e, item?.id)} onDragOver={(e) => e.preventDefault()}>
            <div className='d-flex justify-content-between align-items-center' >
              <h6>{item?.categoryName}</h6>
              <button onClick={() => handleDeleteCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            {
              item?.allVideos &&
              <Row>
                {
                  item?.allVideos.map(card => (
                    <Col sm={12}>
                      <VideoCard displayData={card} insideCategory={true} />
                    </Col>
                  ))
                }
              </Row>
            }
          </div>
        )) : <p className='text-danger text-center'>Nothing to Display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the Form.</p>
          <Form className='border border-2 p-2 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form className="label">Enter Category name</Form>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored' />
    </>
  )
}

export default Category