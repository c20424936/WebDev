import React from 'react'

import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
    <div class="sidenav">
     
      
        {/*Sidebar Links*/}
        <Link to="/">Home</Link>
        <Link to="/AllBooks">All Books</Link>
        <Link to="/Top10">Top 10 Books of the Week</Link>
        
    </div>
    
    </>
  )
}

export default Sidenav;