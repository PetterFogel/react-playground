import React, { CSSProperties } from 'react';
import SectionItem from './SectionItem';

export default function MasterView() {
    const sectionIds = ['forest', 'sky', 'desert'];

    return (
        <div style={rootStyle}>
            {sectionIds.map((value) => <SectionItem id={value} /> )}
        </div>
    );
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
} 