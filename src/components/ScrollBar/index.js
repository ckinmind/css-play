import React, { Component } from 'react';
import './scrollbar.scss';

class ScrollBar extends Component {
    constructor(props) {
        super(props);
        this.pos = null;
        this.scrollPos = 100;
        this.state = {
            length: this.scrollPos
        }
    }

    handleMouseDown(e){
        this.pos = e.clientX;
    }

    handleMouseMove(e){

        if (this.pos === null) {
            return;
        }

        this.scrollPos += e.clientX - this.pos;
        this.pos = e.clientX;
        this.scrollPos = Math.max(0, this.scrollPos); /* 左右移动过程中会导致计算的值有负值情况*/
        this.scrollPos = Math.min(490, this.scrollPos);

        this.refs.scrollbar.style.width = this.scrollPos + 'px';
        this.refs.scrollhandle.style.left = (this.scrollPos - 6) + 'px'; /* 6是小圆圈的大小*/
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
                    <div className="scroll-bg">
                        <div className="scroll-bar" ref="scrollbar"></div>
                        <div className="scroll-handle"  ref="scrollhandle"  onMouseDown={this.handleMouseDown.bind(this)} ></div>
                    </div>
                </div>
                <div className="distance">
                    <p>{this.state.length}</p>
                </div>
            </div>
        );
    }
}

export  default ScrollBar;

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

