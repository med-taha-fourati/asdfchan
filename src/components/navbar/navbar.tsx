'use client'

import './navbar.css';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isCollapsed, setCollapsed] = useState(true);

    const handleNavCollapse = () => setCollapsed(!isCollapsed);
    
    return (
        <>
            <nav className="p-3 sticky-top navbar navbar-expand-lg justify-content-start navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand" href="#">asdfchan</Link>
                    <button className='navbar-toggler' 
                            type='button' 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNavAltMarkup" 
                            aria-controls="navbarNavAltMarkup" 
                            aria-expanded={!isCollapsed ? true : false}
                            aria-label="Toggle navigation"
                            onClick={handleNavCollapse}>

                        <span className='navbar-toggler-icon'></span>
                    </button>
                  
                  <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                    <div className="d-flex navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/boards">Boards</Link>
                    </div>
                    <hr style={{
                        color: 'white'
                    }}/>
                    <span className="navbar-text">
                      The chan site for all cute and funny
                    </span>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;