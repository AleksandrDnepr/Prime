import { Component } from "react";
import { Button, ListItem } from "@mui/material";

export class LoadMoreBtn extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <ListItem>
        <Button
          variant="contained"
          size="medium"
          onClick={ handleClick }
          sx={{ position: "sticky" }}
        >
          Show more
        </Button>
      </ListItem>
    );
  }
}
