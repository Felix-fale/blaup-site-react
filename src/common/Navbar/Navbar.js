import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/logo.png'

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination onClick={closeMobileMenu}">
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="far fa-chevron-right"></i>Sign In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="far fa-chevron-right"></i>Register
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="contact flex_space">
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contact">+228 97 17 13 91</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contact">+228 97 17 13 91</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
