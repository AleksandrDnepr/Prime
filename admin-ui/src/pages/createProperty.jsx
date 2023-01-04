import { Component } from "react";
import { ModalWindow } from "../components/modalWindow.jsx";

export class CreateProperty extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { isModalOpen } = this.state;

    return <ModalWindow open={isModalOpen}></ModalWindow>;
  }
}
