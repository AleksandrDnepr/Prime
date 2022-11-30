import { Component } from "react";
import { List } from "@mui/material";
import { PropertyItem } from "../components/propertyItem";

export class PropertyList extends Component {
  render() {
    const { properties } = this.props;

    return (
      <List
        sx={{
          maxWidth: "95%",
          bgcolor: "background.paper",
          '&:empty::before': {
            content: '"Sorry... No properties found 😅"',
            display: 'block',
          }
        }}
      >
        {properties.map(property => (
          <PropertyItem
            key={property.id}
            id={property.id}
            title={property.title + " " + property.id}
            image={property.images.prewiew}
          />
        ))}
      </List>
    );
  }
}
