import React from 'react';
import style from './Button.module.css';
import ThemeContext from '../_Context/Context';

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        // return <li className={style[this.props.theme]}>{this.props.name}</li>
        return <li className={style[this.context.theme]}>{this.props.name}</li>
    }
}

export default ThemedButton