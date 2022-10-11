import { Component } from "react";
import "./button.css";

export default class Button extends Component {

    render() {
        const {className, handleClick, isDisabled, children} = this.props;
        return (            
        <button type="button" className={className + " button"} onClick={handleClick} disabled={isDisabled} >
            {children}
        </button>
        )
    }
}
