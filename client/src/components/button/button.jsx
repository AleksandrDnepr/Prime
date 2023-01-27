import { Component } from "react";
import "./button.css";

export class Button extends Component {
  BtnSize() {
    let { size } = this.props;
    switch (size) {
      case "m":
        return "Btn Btn__m_size";
      case "l":
        return "Btn Btn__l_size";
      default:
        break;
    }
  }

  BtnBorder() {
    let { rounding } = this.props;
    switch (rounding) {
      case "none":
        return "Btn__border-round-none";
      case "right":
        return "Btn__border-round-right";
      case "left":
        return "Btn__border-round-left";
      case "both":
        return "Btn__border-round-both";
      default:
        break;
    }
  }

  className() {
    const { size, rounding } = this.props;
    return `${this.BtnSize(size)} ${this.BtnBorder(rounding)}`;
  }

  render() {
    const { clickEvent, isDisabled, children, role } = this.props;
    return (
      <button
        role={role}
        type="button"
        className={this.className()}
        onClick={clickEvent}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
}
