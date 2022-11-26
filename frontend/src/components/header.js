import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
   
      <Navbar className='header' fixed="top">
        <Navbar.Brand href="/"><h1>M&B Bookshop</h1></Navbar.Brand>
        <Navbar.Brand> </Navbar.Brand>
          <Navbar.Brand> </Navbar.Brand>
        
          <Nav className="headlink" fixed="top">
          <Nav.Link href="/"> Home</Nav.Link>
            </Nav>
           
            <Nav className="headlink" fixed="top">
            <Nav.Link href="/UserList">Users</Nav.Link>
            </Nav>

            <Nav className="headlink" fixed="top">
       
            <NavDropdown title="Books" id="basic-nav-dropdown">
              
            <Nav className="form"><NavDropdown.Item href="/AllBooks">All Books</NavDropdown.Item></Nav>
            <Nav className="form"><NavDropdown.Item href="/Top10">Top 10 Books of the week</NavDropdown.Item></Nav>
              <NavDropdown.Divider />
            </NavDropdown>
            </Nav>

            <Nav className="headlink">
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
      </Navbar>
  );
}


Header.defaultProps = {
    title: 'M&B Bookshop'
}


export default Header;