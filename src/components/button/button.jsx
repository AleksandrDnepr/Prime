// import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Component } from "react";
import "./button.css";

export default class Button extends Component {

    render() {
        const {className, handleClick, isDisabled, children} = this.props;
        return (
        <button className={className + " Btn"} onClick={handleClick} disabled={isDisabled} >
            {children}
        </button>
        )
    }
}
