import React, {useState, useEffect} from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    YYC.AID <i className='fab fa-typo3' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About Us" className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Current Plan" className="nav-links" onClick={closeMobileMenu}>
                            Current Plan
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeiIvT9SFk8_r6XO4sC9dBWw2EQqRTj3umpFlkTtg7Wo6kM_A/viewform?usp=sf_link' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Get Involved Today
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar