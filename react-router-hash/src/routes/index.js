import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../containers/Home';
import Page from '../containers/Page';
import Content from '../containers/Content';
import NotFound from '../containers/NotFound';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page}/>
            <Route exact path="/content" component={Content}/>
            <Route path="/content/:id" component={Content}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    )
}

export default Routes;
