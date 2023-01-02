import { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";

export class TabsBlock extends Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;

    const tabs = ["messages", "images", "floor plans", "features", "amenities"];

    const switchTabs = (event, newValue) => {
      this.setState({ value: newValue });
    };

    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={switchTabs}>
            {tabs.map((tab, index) => {
              if (tab === "floor plans") {
                return (
                  <Tab
                    key={index}
                    label={tab}
                    component={NavLink}
                    to={`/properties/:property_id/floor_plans`}
                  />
                );
              } else {
                return (
                  <Tab
                    key={index}
                    label={tab}
                    component={NavLink}
                    to={`/properties/:property_id/${tab}`}
                  />
                );
              }
            })}
          </Tabs>
        </Box>
      </Box>
    );
  }
}
