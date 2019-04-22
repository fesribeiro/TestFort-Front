import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import RegisterEstablishment from './pages/RegisterEstablishment';
import Establishments from './pages/Establishments'
import UpdateEstablishment from './pages/UpdateEstablishment'

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route path="/" exact component={Establishments} />
            <Route path="/register" exact component={RegisterEstablishment} />
            <Route path="/Establishments" exact component={Establishments} />
            <Route path="/UpdateEstablishments/:id" exact component={UpdateEstablishment} />
        </Switch>
    </BrowserRouter>
);

export default Routes;