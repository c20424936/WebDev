import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/header';
import Sidenav from '../components/sidebar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Login() {


      return (
        <>
        <Header/>
        <Sidenav/>
        <div className='form'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to="/"><Button variant="primary" type="submit">Submit</Button></Link>
   <br/>
   <br/>
          <label>Not Registered? </label>
          <Link to="/Register"><h3>Register Here!</h3></Link>
        </Form>
        </div>
        
        <Footer/>
        </>
      )
}

export default Login;