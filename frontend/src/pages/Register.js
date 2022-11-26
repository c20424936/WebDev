import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'


import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav  from '../components/sidebar';



const Register = () => {

  


  return (
<>
    <Header/>
    <Sidenav/>
        <body>
        <div className='Home'>
        <div className='form'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to="/"><Button variant="primary" type="submit"><h2>Register</h2></Button></Link>
      <br/><br/>
      <label>Have an account? </label>
          <Link to="/login"><h3>Log in here!</h3></Link>


      </Form>
        </div>
        </div>
        </body>
        <Footer/>
        </>
  )
}
export default Register; 