import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
            <aside className="app-aside">
                <h3>公共组件</h3>
                <ul className="menu-ul">
                    <li><Link to="/sliderpage">Slider</Link></li>
                </ul>
                <h3>页面</h3>
                <ul className="menu-ul">
                    <li><Link to="/triangle">Triangle Page</Link></li>
                </ul>
            </aside>
        )
    }
}

export default Aside;
