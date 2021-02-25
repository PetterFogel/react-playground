import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import Content from './Content';

export default function Layout() {
    return (
        <div style={layoutStyle}>
            <Navbar/>
            <Content/>
        </div>
    ); 
}

const layoutStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
}