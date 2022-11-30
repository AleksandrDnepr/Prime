import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button/button";
import "./errorMessage.css";

export class ErrorMessage extends Component {
  state = {
    isVisible: true,
  };

  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modal-root");
  }

  onClose() {
    this.setState({ isVisible: false });
  }

  render() {
    const { isVisible } = this.state;

    if (!isVisible) return null;

    return ReactDOM.createPortal(
      <section className="error-message">
        <div className="error-message__block">
          {this.props.children}{" "}
          <Button size="m" clickEvent={() => this.onClose()}>
            ×
          </Button>
        </div>
      </section>,
      this.modalRoot
    );
  }
}
