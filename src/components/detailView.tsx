import React, { CSSProperties } from 'react';

export default function DetailView() {
    const imageSrc = `../assets/forest.jpg`;
    return(
        <div style={rootStyle}>
            <img style={imageStyle} src={imageSrc} alt=""/>

        </div>
    );
}

const rootStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    background: 'red'
}

const imageStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',

}