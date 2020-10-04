import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" component={SignUp} />
        </Switch>
    );
};


