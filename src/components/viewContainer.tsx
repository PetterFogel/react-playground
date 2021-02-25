import React, { CSSProperties } from 'react';
import DetailView from './detailView';
import MasterView from './masterView';

export default function ViewContainer() {
    return (
        <div style={container}>
            {/* <MasterView/> */}
            <DetailView />
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}