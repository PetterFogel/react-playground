import React, { CSSProperties } from 'react';

export default function Navbar() {
    return (
        <div style={headerContainer}>
            <h1 style={headerTitle}>React Playground</h1>
        </div>
    ) 
}

const headerContainer: CSSProperties = {
    background: '#000'
}

const headerTitle: CSSProperties = {
    color: '#fff',
    margin: '1rem'
}