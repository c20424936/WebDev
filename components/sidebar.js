import React from 'react'

import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
    <div class="sidenav">
        <Link to="/">Home</Link>
        <Link to="/Favourites">Favourites</Link>
        <Link to="/AllBooks">All Books</Link>
    </div>
    
    </>
  )
}

export default Sidenav;