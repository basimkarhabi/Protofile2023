import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll'


function Navbar() {
  return (
   <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Basem</div>
        <Toggle />
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <Link spy={true} to='Intro'  smooth={true}   activeClass='activeClass' >
                    <li>Home</li>
                </Link>

                <Link spy={true} to='Services'  smooth={true}    >
                    <li>Services</li>   
                </Link>

                <Link spy={true} to='Experience' smooth={true}    >
                    <li>Experience</li>    
                </Link>

                <Link spy={true} to='Portfolio'  smooth={true}  >
                    <li>Portfolio</li>  
                </Link>

                <Link spy={true} to='Testimnials'  smooth={true}   >
                    <li>Testimnials</li>
                </Link>

            </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">
            contact
        </button>
        </Link>
    </div>
   </div>
  )
}

export default Navbar