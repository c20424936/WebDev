
import { BrowserRouter as Router,
  Link
} from 'react-router-dom';
import LoginButton from './button'
import React from 'react';
import Favourites from '../pages/Favourites';


const Header = (props) => {
   
  return (
    <div>
    <header className='header'>
    <Link to="/">
      <h1>{props.title}</h1>
    </Link>
    <Link to="/">
      Home
    </Link>
    <Link to="/Favourites">Favourites</Link>
      
    <LoginButton colour = 'red' text= 'Login'/>
    </header>
    </div>
  )
}

Header.defaultProps = {
    title: 'M&B Bookshop'
}


export default Header;