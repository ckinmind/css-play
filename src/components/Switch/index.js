import React from 'react';


class Switch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: false
        };
    }

    getStyles() {
        let styles = {
            toggle: {
                backgroundColor: this.state.selected ? '#ced2d2' : '#0aa5a3',
                color: '#fff',
                float: 'right',
                fontSize: '14px',
                padding: 0,
                textAlign: 'center',
                width: '50%',
                transition: 'all 400ms ease-out'
            },

            background: {
                background: '#fff',
                width: '50%',
                margin: 0,
                position: 'absolute',
                top: 0,
                right: this.state.selected ? 'calc(100% - ' + (this.props.width - 2) / 2 + 'px)' : '0',
                bottom: 0,
                transition: 'all 200ms ease-in-out'
            },

            switch: {
                display: 'inline-block',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                width: this.props.width,
            },

            outer: {
                cursor: 'pointer',
                color: '#fff',
                border: '1px solid #b8bfbf',
                borderRadius: '3px',
                display: 'block',
                lineHeight: this.props.height + 'px',
                overflow: 'hidden',
                padding: 0,
                position: 'relative',
                textTransform: 'uppercase',
            }
        };

        return styles;
    }

    handleToggle() {
        this.setState({ selected: !this.state.selected });
        if (this.props.emitSelected) {
            this.props.emitSelected(this.state.selected);
        }
    }

    render() {
        let styles = this.getStyles();

        return(
            <div onClick={ this.handleToggle.bind(this) } style={ styles.switch }>
                <div style={ styles.outer }>
                    <div style={ styles.toggle }>Off</div>
                    <div style={ styles.toggle }>On</div>
                    <div style={ styles.background }></div>
                </div>
            </div>
        );
    }
}

Switch.propTypes = {
    height: React.PropTypes.number.isRequred,
    width: React.PropTypes.number.isRequred,
    emitSelected: React.PropTypes.func
};

Switch.defaultProps = {
    height: '32px',
    width: '80px'
};

export default Switch;