import { Component } from "react";
import "./button.css";

export default class Button extends Component {
   
    BtnSize = () => {
        let { size } = this.props;
        switch (size) {
        case "m":
            return "Btn Btn__m_size";
        case "l":
            return "Btn Btn__l_size";
        default:
            break;
        }
    };

    BtnBorder = () => {
        let { border } = this.props;
        switch (border) {
        case "none-round":
            return "Btn__border-round-none";
        case "right-round":
            return "Btn__border-round-right";
        case "left-round":
            return "Btn__border-round-left";
        case "next-page-round":
            return "Btn__border-round-next-page";
        case "prev-page-round":
            return "Btn__border-round-prev-page";
        default:
            break;
        }
    };

    render() {
        const { changePage, isDisabled, children, size, border} = this.props;
        return (
        <button type="button" className={`${this.BtnSize(size)} ${this.BtnBorder(border)}`} onClick={changePage} disabled={isDisabled} >
            {children}
        </button>
        )
    }
}
