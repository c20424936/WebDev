import React from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav from '../components/sidebar';


const NewBooks = () => {
  return (
    <div className='Home'>
        
      <Header/>
      <Sidenav/>
      <body>
      <h1>New Books in Stock</h1>
      </body>
      <Footer/>
      </div>
  )
}
export default NewBooks; 