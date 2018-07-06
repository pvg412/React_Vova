import React, {  Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Gallery from './component/Gallery/Gallery';

const Routers = ({gallery}) => {
    return (
        <Fragment>
            <Route exact path='/' component={Home}/>
            <Route path='/team' render={() => <h2>Team</h2>}/>
            <Route path='/gallery' render={() => <Gallery gallery={gallery}></Gallery>}/>
        </Fragment>
        )
};

export default Routers;
