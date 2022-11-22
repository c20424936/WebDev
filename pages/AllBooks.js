import React from 'react'
import Header from '../components/header';
import Footer from '../components/Footer';
import Sidenav from '../components/sidebar';

const AllBooks = () => {
  return (
    <div>
        
      <Header/>
      <Sidenav/>
      <div className='Home'>
        <h1>All Books</h1>
      </div>
      <Footer/>
      </div>
  )
}
 
export default AllBooks; 