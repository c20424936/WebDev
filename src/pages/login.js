import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/header';
import Sidenav from '../components/sidebar';
import { Link } from "react-router-dom";



function Login() {


      const [password, setpassword] = useState("");
      const [email, setemail] = useState("");


      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The email you entered was: ${email}`)
      }
    
      return (
        <>
        <Header/>
        <Sidenav/>
        <div className=''>
      <div className='form'>
        <form onSubmit={handleSubmit}>
        <br/>
        <br/>
        <label>Enter your email: 
            <input 
              type="email" 
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
          <br/>
          <br/>
          <br/>
          <label>Enter your password:
            <input 
              type="password" 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </label>
          <br/>
          <br/>
          <br/>
          <button className='subbtn' type="submit"  value="Submit">Login</button>
          <br/>
          <br/>
          <br/>  
          <label>Not Registered? </label>
          <Link to="/Register"><h3>Register Here!</h3></Link>
        </form>
        </div>
        </div>
        <Footer/>
        </>
      )
}

export default Login;