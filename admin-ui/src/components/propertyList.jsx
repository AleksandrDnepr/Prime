import { Component } from "react";
import List from "@mui/material/List";
import { PropertyItem } from "../components/propertyItem";

export class PropertyList extends Component {
  render() {
    const { properties } = this.props;

    return (
      <List
        sx={{
          maxWidth: "95%",
          bgcolor: "background.paper",
        }}
      >
        {properties.map((property) => (
          <PropertyItem
            key={property.id}
            propertyId={property.id}
            title={property.title}
            image={property.images.prewiew}
          />
        ))}
      </List>
    );
  }
}
