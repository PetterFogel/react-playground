import React, { CSSProperties } from 'react';

export default function Navbar() {
    return (
        <div style={headerContainer}>
            <h1 style={headerTitle}>React Playground</h1>
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
    color: '#fff'
}