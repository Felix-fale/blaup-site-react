import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav className='navbar'>
                <div className="container flex_space">
                    <div className="meni-icon">
                        <i className='fas fa-times'></i>
                    </div>

                    <ul className="nav-menu active">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/gallery'>Gallery</NavLink>
                            <NavLink to='/destination'>Destination</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/testimonial'>Testimonial</NavLink>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                    </ul>

                    <div className="login-area flex">
                        <li>
                            <NavLink to='/sign-in'>
                                <i className='far fa-chevron-right'>Sign In</i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>
                                <i className='far fa-chevron-right'>Register</i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                <button className='primary-btn'>Request a Quote</button>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;