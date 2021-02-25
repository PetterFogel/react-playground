import React, { CSSProperties } from 'react';
import MasterView from './masterView';
// import SectionItem from './SectionItem';

export default function ViewContainer() {
    return (
        <div style={container}>
            <MasterView/>

        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
}