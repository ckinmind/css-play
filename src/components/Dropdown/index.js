import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectValue: this.props.initValue
        };
    }

    handleChange(e) {
        this.setState({
            selectValue: e.target.value
        },()=>{
            if(typeof(this.props.getValue)=='function'){   /* 有该方法再执行回调，用于上级组件获取到变化的值*/
                this.props.getValue(this.state.selectValue);
            }
        });
    }

    render() {
        let optionArr = this.props.optionList.map((value,index)=><option key={index} value={value}>{value}</option>);
        return (
            <div  style={{fontSize: '1.5em'}}>
                <select value={this.state.selectValue} onChange={this.handleChange.bind(this)}>
                    { optionArr }
                </select>
            </div>
        );
    }
}

Dropdown.propTypes = {
    initValue: React.PropTypes.string.isRequired,      /** 初始值*/
    optionList: React.PropTypes.array.isRequired,      /** 列表值*/
    getValue: React.PropTypes.func                     /** 值变化后的回调*/
};

Dropdown.defaultProps = {
    initValue: 'Orange',
    optionList: ['Orange','Pineapple','Cherry','Banana']
};



export default Dropdown;

