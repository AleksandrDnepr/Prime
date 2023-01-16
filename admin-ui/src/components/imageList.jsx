import React, { Component } from "react";
import { List } from "@mui/material";
import { ImageItem } from "../components/imageItem";

export class ImageList extends Component {
  state = {
    images: [],
    isLoading: true,
  };
  componentDidMount() {
    const { propertyId } = this.props;
    console.log(propertyId);

    fetch(`/api/properties/${propertyId}/images`)
      .then((res) => res.json())
      .then((data) => this.setState({ images: data }))
      .catch(() => this.setState({ error: "Something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { image } = this.props;
    const { images } = this.state;
    console.log({ images });

    return (
      <List>
        <ImageItem image={image} />
      </List>
    );
  }
}
