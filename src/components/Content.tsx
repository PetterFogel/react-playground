import React, { CSSProperties } from 'react';
import SectionItem from './SectionItem';

export default function Content() {
    return (
        <div style={contentStyle}>
            <SectionItem/>
            <SectionItem/>
            <SectionItem/>
        </div>
    );
}

const contentStyle: CSSProperties = {
    background: '#333',
    padding: '1rem',
    height: '100%'
}