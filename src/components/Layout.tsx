import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import ViewContainer from './viewContainer';
import { fullScreen } from '../css';

export default function Layout() {

    const styles = { ...columnFlex, ...fullScreen, ...background };

    return (
        <div style={styles}>
            <Navbar/>
            <ViewContainer/>
        </div>
    ); 
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
};

const background: CSSProperties = {
    background: '#333'
};