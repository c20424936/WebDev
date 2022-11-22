import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/header';
import Sidenav from '../components/sidebar';


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
        <label>Enter your email:
            <input 
              type="email" 
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
          <br/>
          <label>Enter your password:
            <input 
              type="password" 
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </label>
          <br/>
           <input type="submit" value="Submit"/>
          
        </form>
        </div>
        </div>
        <Footer/>
        </>
      )
}

export default Login;