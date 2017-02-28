import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';
import Aside from './components/common/Aside';
import HomePage from './components/HomePage/HomePage';
import Triangle from './components/Triangle';

import SliderPage from './components/SliderPage';



const App = ({ children }) => (
    <div className="app-main">
       <Aside />
        <div className="app-content">
            {children}
        </div>
    </div>
);


export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="triangle" component={Triangle}/>
            <Route path="sliderpage" component={SliderPage}/>
        </Route>
    </Router>
);