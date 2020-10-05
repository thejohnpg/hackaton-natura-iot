import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';

import Info from './components/Info';
import Profile from './components/Profile';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={SignUp} />
            <Route path="/info" component={Info} />
            <Route path="/perfil" component={Profile} />
        </Switch>
    );
};


