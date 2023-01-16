import React, { Component } from "react";
import { ListItem } from "@mui/material";

export class ImageItem extends Component {
  render() {
    const { image } = this.props;
    console.log({ image });
    return <ListItem>{image}</ListItem>;
  }
}
