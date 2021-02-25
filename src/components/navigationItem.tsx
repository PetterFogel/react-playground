import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { centeredContent } from '../css';

interface Props {
    id: string;
}

export default function NavigationItem(props: Props) {
    const imageSrc = `../assets/${props.id}.jpg`;
    const toUrl = `/${props.id}`;
    return (
        <Link to={toUrl} style={{ ...gridItem, ...centeredContent }}>
            <img src={imageSrc} style={fullscreen} />
            <h2 style={{ ...centeredAbsolute, ...appearance}}>{props.id}</h2>
        </Link>
    );
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%'
}

const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const appearance: CSSProperties = {
    color: '#1E1E1E',
}