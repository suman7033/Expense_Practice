import React,{useState} from 'react'
import "./navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <nav className="navbar">
    <div className="navbar-container">
        <a href="#" className="navbar-logo">Logo</a>
        <div className="navbar-toggle" onClick={toggleMenu}>
            &#9776; {/* Hamburger menu icon */}
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar
