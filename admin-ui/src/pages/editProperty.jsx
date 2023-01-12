import { Component } from "react";
import { PropertyForm } from "../components/propertyForm";
import { ModalWindow } from "../components/modalWindow";
import { withRouter } from "react-router-dom";

class EditProperty extends Component {
  // state = {
  //     values: {
  //       title: "1",
  //       id: "1",
  //       locationCity: "",
  //       locationState: "",
  //       deal: "",
  //       type: "",
  //       price: "",
  //       area: "",
  //       bedroom: "",
  //       bathroom: "",
  //       year: "",
  //       description: "",
  //     },
  //   };

  state = {
    property: [],
    isLoading: true,
  };
  close() {
    this.props.history.push("/properties");
  }

  componentDidMount() {
    this.ccc();

    // fetch(`/api/properties/A0001/edit`)
    // .then((res) => {
    //         if (res.ok) {
    //           res.json().then((data) => {
    //             this.setState({ property: data });
    //           })}
    //         });
    // .then((response) => console.log(response));
  }

  ccc() {
    const { id } = this.props.match.params;

    fetch(`/api/properties/${id}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            this.setState({ property: data });
            console.log(data);
          });
        } else {
          this.setState({
            error: `Property with id`,
          });
        }
      })

      .catch(() => this.setState({ error: "Something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));
  }

  // editProperty(values) {
  //         const propId = parseInt(this.props.match.params.prop_id);
  //     console.log(propId);
  //         fetch(`/api/properties/${propId}`, {
  //           method: "PATCH",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             ...values,
  //           }),
  //         })
  //           .then((data) => data.json())
  //           .then(({ success }) => {
  //             if (success) {
  //               this.props.onEdit();
  //             }
  //           })
  //           .catch((error) => this.setState({ error }))
  //           .finally(() => {
  //             this.close();
  //           });
  //       }

  render() {
    const isOpened = this.props.match.path === "/properties/:id/edit";
    //   const {prop_id} = this.props;
    const { values } = this.state;
    //   console.log(property);
    return (
      <ModalWindow open={isOpened}>
        <PropertyForm
          // defaultValues = {property}
          // defaultValues = {values}
          // onSubmit={(values) => {
          //     this.edit(values);}}
          onClose={() => this.close()}
          buttonName="Edit"
        />
      </ModalWindow>
    );
  }
}

export default withRouter(EditProperty);

//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       ...property,
//     }),
//   })
