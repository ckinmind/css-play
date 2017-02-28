import React, { Component } from 'react';
import './triangle.scss';
import Slider2 from '../common/Slider/Slider2';

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
                <div className="content markdown-body" dangerouslySetInnerHTML={{__html: JSON.stringify(style)}} ></div>
              </div>
        );
    }
}

export  default Triangle;


