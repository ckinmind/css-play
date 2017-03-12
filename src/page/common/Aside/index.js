import React from 'react';
import { Link } from 'react-router';

class Aside extends React.Component {

    render() {
        return (
            <aside className="app-sidebar">
                <nav>
                    <Link to="/slider1"       activeClassName="active">Slider1</Link>
                    <Link to="/slider2"       activeClassName="active">Slider2</Link>
                    <Link to="/dropdown"      activeClassName="active">Dropdown</Link>
                    <Link to="/switch"        activeClassName="active">Switch</Link>
                    <Link to="/notification"  activeClassName="active">Notification</Link>
                    <Link to="/triangle-page" activeClassName="active">Triangle</Link>
                </nav>
            </aside>
        )
    }
}

export default Aside;
