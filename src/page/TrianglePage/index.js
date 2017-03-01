import React, { Component } from 'react';
import './TrianglePage.scss';
import Slider2 from '../../components/Slider2';

class Triangle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 4
        };
    }

    handleGetValue(value){
       this.setState({
           value:value
       });
    }

    render() {
        let { value } = this.state;
        let style = {
            display: 'inline-block',
            width: 0,
            height: 0,
            borderTop: `${value}px solid red`,
            borderRight: `${value}px solid transparent`,
            borderLeft: `${value}px solid transparent`
        };

        return (
            <div className="triangle" style={{ marginLeft: '80px', width: '40vw'}}>
                <Slider2 getValue={ this.handleGetValue.bind(this) }/>
                <div className="caret-box">
                    <div className="caret" style={style}></div>
                </div>
                <code className="content markdown-body" dangerouslySetInnerHTML={{__html: JSON.stringify(style)}} ></code>
              </div>
        );
    }
}

export  default Triangle;


