import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
   
      <Navbar className='header' fixed="top">
        <Navbar.Brand href="/"><h1>M&B Bookshop</h1></Navbar.Brand> {/*Home link in the logo */}
        <Navbar.Brand> </Navbar.Brand>
          <Navbar.Brand> </Navbar.Brand>
        
          <Nav className="headlink" fixed="top">
          <Nav.Link href="/"> Home</Nav.Link>
            </Nav>{/* Home header link */}
           
            

            <Nav className="headlink" fixed="top">
       
            <NavDropdown title="Books" id="basic-nav-dropdown">{/*Dropdown menu */}
           
              
            <Nav className="form"><NavDropdown.Item href="/AllBooks">All Books</NavDropdown.Item></Nav>{/*Dropdown menu link to all books */}
            <Nav className="form"><NavDropdown.Item href="/Top10">Top 10 Books of the week</NavDropdown.Item></Nav>{/*Dropdown menu link to top 10 books */}
              <NavDropdown.Divider />
            </NavDropdown>
            </Nav>

            <Nav className="headlink">
            <Nav.Link href="/Login">Login</Nav.Link>{/*Login page link */}
          </Nav>
      </Navbar>
  );
}


Header.defaultProps = {
    title: 'M&B Bookshop'
}
{/*Prop for Bookshop name */}

export default Header;