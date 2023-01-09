import { Component } from "react";
import { PropertyForm } from "../components/propertyForm";
import { ModalWindow } from "../components/modalWindow";

export class EditProperty extends Component {
  render() {
    console.log("A");

    return (
      <ModalWindow open={"/properties/:id/edit"}>
        <PropertyForm />
      </ModalWindow>
    );
  }
}
