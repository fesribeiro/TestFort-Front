import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import RegisterEstablishment from './pages/RegisterEstablishment';
import Establishments from './pages/Establishments'


const Routes = () => (
    <BrowserRouter>
        <Switch> 
            
            <Route path="/" exact component={Main} />
            <Route path="/register" exact component={RegisterEstablishment} />
            <Route path="/Establishments" exact component={Establishments} />
        </Switch>
    </BrowserRouter>
);

export default Routes;