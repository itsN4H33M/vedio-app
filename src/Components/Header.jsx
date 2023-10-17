import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} className='text-decoration-none text-light fs-4'>
            <i className="fa-solid fa-cloud-arrow-up text-warning"></i>{' '}
            UPlayer
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header