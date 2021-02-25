import React, { CSSProperties } from 'react';
import { Route, Switch } from 'react-router';
import DetailView from './detailView';
import MasterView from './masterView';

export default function ViewContainer() {
    return (
        <div style={container}>
            <Switch>
            <Route exact path="/" component={MasterView} />
            <Route path="/:name" component={DetailView} />
            <h2>Du har besökt en sida som inte finns - 404</h2>
            </Switch>
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}