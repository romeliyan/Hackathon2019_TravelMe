import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {
    
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="logo left"> TRAVEL ME</a>

                <ul className="right" >

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                
                </ul>
            </div>

        </nav>
     )    

}

export default Nav