import { Component } from "react";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { ListItemButton, List } from "@mui/material";


export class ToggleAdmin extends Component {
   render () { 
    const { title, link } = this.props;
        return (
        <List sx={{ display: 'flex'}}>
            {title.split(' ').map((value) => ((
                <ListItemButton                
                key={value}
                component="a" 
                to={link + value.toLowerCase()}
                sx={{maxWidth: "120px", 
                alignItems: "center",
                justifyContent: "center"}}>
                    <Breadcrumps
                    title={value}
                    breadcrumbs={[]}
                    lastBreadcrumbs="true"                
                    />
                </ListItemButton>
            )))}
        </List>
    )
   }
}