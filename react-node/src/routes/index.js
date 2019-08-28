import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../containers/Home';
import List from '../containers/List';
import NotFound from '../containers/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list/:id" component={List}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    )
}

export default Routes;
