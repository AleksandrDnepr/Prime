import { Component } from "react";
import "./button.css";

export default class Button extends Component {

    render() {
        const {className, handleClick, children} = this.props;
        return (
        <button className={className + " Btn"} onClick={handleClick}>
            {children}
        </button>
        )
    }
}
