import React, { Component } from "react";
import { List } from "@mui/material";
import { ImageItem } from "../components/imageItem";

export class ImageList extends Component {
  render() {
    const { images } = this.props;
    console.log({ images });

    return <List></List>;
  }
}
