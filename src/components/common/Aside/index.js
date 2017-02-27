import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
            <aside className="app-aside">
                <ul className="menu-ul">
                    <li><Link to="/triangle">三角型</Link></li>
                    <li><Link to="/scrollbar">ScrollBar</Link></li>
                    <li><Link to="/triangle">三角型</Link></li>
                    <li><Link to="/triangle">三角型</Link></li>
                </ul>
            </aside>
        )
    }
}

export default Aside;
