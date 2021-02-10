import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pagina from './pages/Pagina';
import PaginaEn from './pages/Pagina-en';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pagina}/>
                <Route path="/en" exact component={PaginaEn}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
