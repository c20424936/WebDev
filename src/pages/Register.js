import React,{useState} from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav  from '../components/sidebar';



const Register = () => {


    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [name, setname] = useState("");


    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`   The email you entered was: ${email},
The name you entered was: ${name}`)

    }
  


  return (
<>
    <Header/>
    <Sidenav/>
        <body>
        <div className='form'>
            <form onSubmit={handleSubmit}>
            <br/>
            <br/>
                <label>Enter your Name:
                    <input 
                    type="Name" 
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    />
            </label>
            <br/>
            <br/>
            <br/>
                <label>Enter your Email:
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
        <button className='subbtn' type="submit"  value="Submit">Register</button>
        
        </form>
        </div>
        </body>
        <Footer/>
        </>
  )
}
export default Register; 