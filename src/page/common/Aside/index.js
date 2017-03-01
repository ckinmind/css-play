import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
            <aside className="app-aside">
                <h3>公共组件</h3>
                <ul className="menu-ul">
                    <li><Link to="/slider1">Slider1</Link></li>
                    <li><Link to="/slider2">Slider2</Link></li>
                </ul>
                <h3>页面</h3>
                <ul className="menu-ul">
                    <li><Link to="/triangle-page">Triangle</Link></li>
                </ul>
            </aside>
        )
    }
}

export default Aside;
