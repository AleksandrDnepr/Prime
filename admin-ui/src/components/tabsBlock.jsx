import { Component } from "react";
import {NavLink, Switch, Route} from "react-router-dom";
import { Box } from "@mui/material";
import { Tab } from '@mui/material';
import { Tabs } from '@mui/material';

export class TabsBlock extends Component { 
  state = {
    value: 4
  }     

  render() {    
    const {value } = this.state

    const tabs = [
      {label: "images",path: "images" },
      {label: "floor plans", path: "floor_plans" },
      {label: "features", path: "features" },
      {label: "amenities", path: "amenities" },
      {label: "messages", path: "messages" },
  ]
  const switchTabs = (event, newValue) => {
    this.setState({value: newValue})
  }

    return (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={switchTabs}>{
          tabs.map( (tab, index) => 
          <Tab key={index} label={tab.label} component={NavLink} to={`/properties/:property_id/${tab.path}`}/>      
          )
        }
        </Tabs>      
      </Box>
      </Box>
    );
  }
}