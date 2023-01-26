import React from 'react';

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
                            <link to='/'>Home</link>
                            <link to='/about'>About</link>
                            <link to='gallery/'>Gallery</link>
                            <link to='/destination'>Destination</link>
                            <link to='/blog'>Blog</link>
                            <link to='/testimonial'>Testimonial</link>
                            <link to='/contact'>Contact Us</link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;