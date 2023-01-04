import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";

class TabsBlock extends Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;
    const { url } = this.props.match;

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
                    to={`${url}/floor_plans`}
                  />
                );
              } else {
                return (
                  <Tab
                    key={index}
                    label={tab}
                    component={NavLink}
                    to={`${url}/${tab}`}
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

export default withRouter(TabsBlock);
