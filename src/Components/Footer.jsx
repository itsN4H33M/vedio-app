import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-dark flex-wrap' style={{ width: '100%', height: '300px' }}>
      <div className="footer-content d-flex justify-content-evenly w-100 mb-5">
        <div className="website" style={{ width: '30%' }}>
          <h4>
            <i className="fa-solid fa-cloud-arrow-up fs-4 text-warning"></i>{' '}UPlayer
          </h4>
          <h6>Designed and built with all the love in the world by the UPlayer team with the help of our contributors.</h6>
          <h6>Code licensed UPlayer, docs CC BY 1.0.</h6>
          <h6>Currently v1.0.0.</h6>

        </div>
        <div className="links d-flex flex-column">
          <h4 className='text-dark'>Links</h4>
          <Link to={'/home'} className='text-decoration-none'>Home</Link>
          <Link to={'/'} className='text-decoration-none'>Landing Page</Link>
          <Link to={'/watch-history'} className='text-decoration-none'  >Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 className='text-dark'>Guides</h4>
          <Link to={'https://react.dev/'} className='text-decoration-none'>React</Link>
          <Link to={'https://getbootstrap.com/'} className='text-decoration-none'>Bootstrap</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} className='text-decoration-none'>React Bootstrap</Link>
        </div>
        <div className="contact">
          <h4 className='text-dark'>Contact Us</h4>
          <div className='d-flex align-items-center'>
            <input class="form-control me-sm-3" type="search" placeholder="Enter your E-mail" wfd-id="id0" />
            <button type="button" className="btn btn-secondary m-2">Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly fs-4 mt-4'>
            <Link to={'https://www.linkedin.com/feed/'} className='text-decoration-none'><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://twitter.com/'} className='text-decoration-none'><i class="fa-brands fa-x-twitter"></i></Link>
            <Link to={'https://www.instagram.com/'} className='text-decoration-none'><i class="fa-brands fa-instagram"></i></Link>
          </div>
        </div>
      </div>
      <p>Copyright @ 2023 UPlayer. Built with React.</p>
    </div>
  )
}

export default Footer