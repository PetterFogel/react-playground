import React, { CSSProperties } from 'react';
import NavigationItem from './navigationItem';

export default function MasterView() {
    const sectionIds = ['forest', 'sky', 'desert'];

    return (
        <div style={rootStyle}>
            {sectionIds.map((value) => <NavigationItem id={value} /> )}
        </div>
    );
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}  