import React from 'react';
import { Link } from 'react-router';
import './slider2.scss';

class Slider2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    handleChange(e){
        this.setState({value: e.target.value}, ()=>{
            this.props.getValue(this.state.value);
        });
    }

    render() {
        return (
            <div className="Setting">
                <label>
                    <div>{this.props.name}</div>
                    <div>{this.state.value}</div>
                </label>
                <input ref={this.props.name} min="0" max="200" step="1" onChange={this.handleChange.bind(this)} id={this.props.name} type="range" defaultValue={this.props.value} />
            </div>
        )
    }
}

Slider2.propTypes  = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    getValue: React.PropTypes.func
};

Slider2.defaultProps = {
    name: 'Slider2',
    value: 50
};


export default Slider2;

