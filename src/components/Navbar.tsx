import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div style={headerContainer}>
            <h1 style={headerTitle}>
                <Link to="/" style={noDecoration}>
                    React Playground
                </Link>
            </h1>
        </div>
    ) 
}

const headerContainer: CSSProperties = {
    background: '#000',
    height: '4rem',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0rem 1rem'
}

const headerTitle: CSSProperties = {
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'none'
}

const noDecoration: CSSProperties = {
    textDecoration: 'none',
    color: '#fff'
}