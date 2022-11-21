
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
    <Link to="/">Home</Link>
    
    <h4>Version 1.0.0</h4>
      <p>Copyright &copy; 2021</p>
    </footer>
  )
}

export default Footer