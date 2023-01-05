import { Component } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { ButtonEdit } from "./buttonEdit.jsx";
import { ButtonDelete } from "./buttonDelete.jsx";

export class PropertyCard extends Component {
  render() {
    const {
      id,
      title,
      city,
      state,
      type,
      area,
      bedrooms,
      bathrooms,
      year,
      price,
      deal,
      preview,
      description,
    } = this.props;

    return (
      <Card sx={{ minWidth: 600, mb: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ID: {id}
            </Typography>
            <Box>
              <ButtonEdit />
              <ButtonDelete />
            </Box>
          </Box>
          <Typography variant="h6" color="primary" gutterBottom>
            Title: {title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Preview:{" "}
              <Avatar
                sx={{ width: 280, height: 220 }}
                variant="square"
                alt={title}
                src={preview}
              />
            </Typography>

            <Typography
              sx={{ width: "33%" }}
              variant="body1"
              color="text.secondary"
              gutterBottom
            >
              Property description: <br /> {description}
            </Typography>

            <Box>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                City: {city}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                State: {state}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Property type: {type}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Area: {area}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Bedrooms: {bedrooms}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Bathrooms: {bathrooms}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Building year: {year}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Type of deal: {deal}
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                Price: $ {price}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
