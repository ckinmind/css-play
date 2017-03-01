import React from 'react';
import { Link } from 'react-router';
import './slider2.scss';

class Slider2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.initValue
        }
    }

    handleChange(e){
        this.setState({value: e.target.value}, ()=>{
            if(typeof(this.props.getValue)=='function'){   /* 有该方法再执行回调，用于上级组件获取到变化的值*/
                this.props.getValue(this.state.value);
            }
        });
    }

    render() {
        return (
            <div className="slider2">
                <label>
                    <div>{this.props.title}</div>
                    <div>{this.state.value}</div>
                </label>
                <input min="0" max="200" onChange={this.handleChange.bind(this)}  type="range" defaultValue={this.props.initValue} />
            </div>
        )
    }
}

Slider2.propTypes  = {
    title: React.PropTypes.string.isRequired,         /** 标题*/
    initValue: React.PropTypes.number.isRequired,     /** 初始值*/
    getValue: React.PropTypes.func                    /** 值变化后的回调*/
};

Slider2.defaultProps = {
    title: 'Slider2',
    initValue: 50
};


export default Slider2;

