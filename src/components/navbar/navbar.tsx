'use client'

import './navbar.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface UserData {
    username: string;
    email: string;
    role: string;
}

const Navbar = () => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [checkJWT, setCheckJWT] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setCheckJWT(true);
        } else {
            setCheckJWT(false);
        }
        const fetchUserData = async () => {
            if (jwt) {
                try {
                    const response = await fetch(`http://localhost:8080/api/auth/retrieve/${jwt}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data: UserData = await response.json();
                    setUserData(data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setUserData(null);
                }
            } else {
                setUserData(null);
            }
        };
        fetchUserData();
    }, [])

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
                        <div className="d-flex justify-content-end">
                        {checkJWT ? (
                            <>
                                <Link className="nav-link" href="/logout">Logout</Link>
                                &nbsp;
                                <Link className="nav-link" href="/profile"><b>{userData?.username}</b>&nbsp;
                                    <span style={{
                                        fontSize: '0.7rem',
                                        color: 'lightgray'
                                    }}>{`(${userData?.role})`}</span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" href="/login">Login</Link>
                                &nbsp;
                                <Link className="nav-link" href="/register">Register</Link>
                                &nbsp;
                                <span>{"The chan site for all cute and funny"}</span>
                            </>
                        )}
                        </div>
                    </span>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;