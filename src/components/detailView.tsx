import React, { CSSProperties } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ name: string}> {

}

export default function DetailView(props: Props) {
    const { name } = props.match.params;
    const imageSrc = `../assets/${name}.jpg`;
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