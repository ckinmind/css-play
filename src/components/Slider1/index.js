import React, { Component } from 'react';
import './slider1.scss';

class Slider1 extends Component {
    constructor(props) {
        super(props);
        this.pos = null;
        this.scrollPos = this.props.initValue;  /*初始值，需要父组件传入，但是有默认值*/
        this.state = {
            length: this.scrollPos
        }
    }

    handleMouseMove(e){

        if (this.pos === null) {
            return;
        }

        this.scrollPos += e.clientX - this.pos;
        this.pos = e.clientX;
        this.scrollPos = Math.max(0, this.scrollPos);    /* 边界情况：左边界，左右移动过程中会导致计算的值有负值情况*/
        this.scrollPos = Math.min(490, this.scrollPos);  /* 有边界，但是一般不太会发生，因为超出scroll范围会触发onMouseLeave*/

        this.refs.scrollbar.style.width = this.scrollPos + 'px';
        this.refs.scrollhandle.style.left = (this.scrollPos - 6) + 'px'; /* 6是小圆圈的直径*/
        this.setState({length: this.scrollPos});
    }


    render() {
        return (
            <div>
                <div className="scroll"
                     onMouseMove={this.handleMouseMove.bind(this)}
                     onMouseUp={()=>this.pos = null}
                     onMouseLeave={()=>this.pos = null}
                >
                    <div className="scroll-title">{this.props.title}</div>
                    <div className="scroll-bg">
                        <div className="scroll-bar" ref="scrollbar"></div>
                        <div className="scroll-handle"  ref="scrollhandle"  onMouseDown={(e)=>this.pos = e.clientX}></div>
                    </div>
                    <div className="scroll-value">
                        <p>{this.state.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Slider1.propTypes  = {
    title: React.PropTypes.string.isRequired,
    initValue: React.PropTypes.number.isRequired
};

Slider1.defaultProps = {
    title: 'Slider',
    initValue: 100
};

export  default Slider1;




/***
 *  1. 在scroll上触发
 *  onMouseUp：鼠标左键回收时(即非点击选中状态)，将this.pos = null, 则handleMouseMove不改变css状态
 *  onMouseLeave： 离开sroll时将this.pos = null, 则handleMouseMove不改变css状态
 *
 *  onMouseMove：
 *  a. 在this.pos = null时，onMouseMove不改变状态，动作会被组织
 *  b. scrollPos有初始值，这个可以设置以显示一段距离, 表示小圆圈距离左边沿的偏离
 *  c. scrollPos有范围大小，在0-490px之间，490px是scrobar的总距离
 *  d. 移动过程中左右移动会导致计算出来的scrollPos小于0的情况，这个要过滤
 *
 *  2. 在scroll-handle触发
 *  onMouseDown： 只有鼠标按到小圆圈上才出发，此时this.pos获取初始值，handleMouseMove才能改变状态
 */

