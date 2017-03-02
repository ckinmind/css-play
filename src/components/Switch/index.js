import React from 'react';
import './Switch.scss';


class Switch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: this.props.initValue
        };
    }

    handleToggle() {
        this.setState({
            selected: !this.state.selected
        },()=>{
            if (this.props.getValue) {  /* 有该方法再执行回调，用于上级组件获取到变化的值*/
                this.props.getValue(this.state.selected);
            }
        });
    }

    render() {

        return(
            <div onClick={ this.handleToggle.bind(this) }  className="switch" style={{width: this.props.width}}>
                <div style={{lineHeight: this.props.height}}  className="outer">
                    <div  className="toggle toggle-true">{this.props.trueText}</div>
                    <div  className="toggle toggle-false">{this.props.falseText}</div>
                    <div style={{left: this.state.selected ? '50%' : 0}} className="cover"></div>
                </div>
            </div>
        );
    }
}

Switch.propTypes = {
    initValue: React.PropTypes.bool.isRequired,      /* 初始显示状态，true或者false*/
    height: React.PropTypes.string.isRequired,       /* switch高度*/
    width: React.PropTypes.string.isRequired,        /* switch宽度*/
    trueText: React.PropTypes.string.isRequired,     /* 正确时显示的文本*/
    falseText: React.PropTypes.string.isRequired,    /* 错误时显示的文本*/
    getValue: React.PropTypes.func                   /* 父组件的回调，用于获取当前的状态*/
};

Switch.defaultProps = {
    initValue: true,
    height: '32px',
    width: '380px',
    trueText: 'ON',
    falseText: 'OFF'
};

export default Switch;