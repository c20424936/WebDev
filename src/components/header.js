import React from 'react';

import { Link } from "react-router-dom";

const Header = (props) => {
   
  return (
    <div>
    <header className='header'>
    <h1><Link to="/">{props.title}</Link> </h1>  
    <nav>
               
    <div className='headlink'><Link to="/">Home</Link></div>
    </nav>
         <nav>
      <div className='headlink'><Link to="/AllBooks">All Books</Link>
      </div>   
        
      </nav>
      <div className='headlink'><Link to="/UserList">List Users</Link>
      </div>
      <div className='headlink'><Link to="/Login">Login</Link></div>
    </header>
    </div>
  )
}

Header.defaultProps = {
    title: 'M&B Bookshop'
}


export default Header;