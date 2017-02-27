import React from 'react';
import './sidebar.scss';


class Sidebar extends React.Component{

    render(){
        return (
            <nav className="sidebar">
                <ul>
                    <li id="link-one">
                        <div>1</div>
                        <div>One</div>
                    </li>
                    <li id="link-two">
                        <div>2</div>
                        <div>Two</div>
                    </li>
                    <li id="link-three">
                        <div>3</div>
                        <div>Three</div>
                    </li>
                    <li id="link-four">
                        <div>4</div>
                        <div>Four</div>
                    </li>
                    <li id="link-five">
                        <div>5</div>
                        <div>Five</div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;