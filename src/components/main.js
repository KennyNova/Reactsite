import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Photos from './photos';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/photos" component={Photos} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;