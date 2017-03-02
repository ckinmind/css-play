import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';

/** 组件*/
import Slider1 from './components/Slider1';
import Slider2 from './components/Slider2';
import Dropdown from './components/Dropdown';
import Switch from './components/Switch';

/** 页面*/
import Aside from './page/common/Aside';
import HomePage from './page/HomePage/HomePage';
import Triangle from './page/TrianglePage';


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
            <Route path="slider1" component={Slider1}/>
            <Route path="slider2" component={Slider2}/>
            <Route path="dropdown" component={Dropdown}/>
            <Route path="switch" component={Switch}/>

            <Route path="triangle-page" component={Triangle}/>
        </Route>
    </Router>
);